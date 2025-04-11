import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic } from "./vite";
import { createServer } from "http";
import { watch } from "fs";
import compression from "compression";

// Ignore temporary Vite files
const ignoredPaths = [
  /\.timestamp-\d+-[a-f0-9]+\.mjs$/,
  /node_modules/,
  /dist/,
  /\.vite/
];

function shouldIgnorePath(path: string): boolean {
  return ignoredPaths.some(pattern => pattern.test(path));
}

// Disable custom watch implementation to reduce file watchers
// if (process.env.NODE_ENV === 'development') {
//   watch('.', { recursive: true }, (_, filename) => {
//     if (filename && !shouldIgnorePath(filename)) {
//       // Only reload for relevant file changes
//       console.log(`File ${filename} changed`);
//     }
//   });
// }

function log(message: string) {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [express] ${message}`);
}

const app = express();
// Enable gzip compression for all responses
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// In-memory store for rate limiting
const requestLimiter = {
  videoRequests: new Map(),
  cleanupInterval: null
};

// Initialize cleanup interval
if (!requestLimiter.cleanupInterval) {
  // Clean up rate limiting data every hour
  requestLimiter.cleanupInterval = setInterval(() => {
    const oneHourAgo = Date.now() - (60 * 60 * 1000);
    for (const [key, timestamp] of requestLimiter.videoRequests.entries()) {
      if (timestamp < oneHourAgo) {
        requestLimiter.videoRequests.delete(key);
      }
    }
  }, 60 * 60 * 1000);
}

// Add protection for video assets and expire headers for static content
app.use((req, res, next) => {
  // Check if the request is for a video file
  const isVideoAsset = /\.(mp4)$/i.test(req.path);
  
  if (isVideoAsset) {
    // Check referrer - only allow from your own domain
    const referer = req.get('Referer') || '';
    const allowedDomains = ['elastos.net', 'www.elastos.net', 'elastosnet.replit.app'];
    const isValidReferer = allowedDomains.some(domain => referer.includes(domain));
    
    // Get client IP for rate limiting
    const clientIp = req.ip || req.connection.remoteAddress;
    const videoId = req.path;
    const requestKey = `${clientIp}:${videoId}`;
    const now = Date.now();
    const lastRequest = requestLimiter.videoRequests.get(requestKey) || 0;
    
    // Allow only one video request per 5 minutes per IP per video
    const rateLimitWindow = 5 * 60 * 1000; // 5 minutes
    
    if (!isValidReferer) {
      // Block hotlinking
      return res.status(403).send('Direct video access not allowed');
    }
    
    if (now - lastRequest < rateLimitWindow) {
      // Set rate limit headers
      res.setHeader('X-RateLimit-Limit', '1');
      res.setHeader('X-RateLimit-Remaining', '0');
      res.setHeader('X-RateLimit-Reset', new Date(lastRequest + rateLimitWindow).toUTCString());
      return res.status(429).send('Too many requests. Please try again later.');
    }
    
    // Update rate limiter
    requestLimiter.videoRequests.set(requestKey, now);
    
    // Set more restrictive cache for videos (1 hour)
    const oneHourInSeconds = 60 * 60;
    res.setHeader('Cache-Control', `public, max-age=${oneHourInSeconds}`);
    res.setHeader('Expires', new Date(Date.now() + oneHourInSeconds * 1000).toUTCString());
  } else if (/\.(jpg|jpeg|png|gif|ico|css|js|svg|webp|woff|woff2|ttf|eot)$/i.test(req.path)) {
    // Set expires headers for non-video static content (1 week)
    const oneWeekInSeconds = 60 * 60 * 24 * 7;
    res.setHeader('Cache-Control', `public, max-age=${oneWeekInSeconds}`);
    res.setHeader('Expires', new Date(Date.now() + oneWeekInSeconds * 1000).toUTCString());
  }
  
  next();
});

let isShuttingDown = false;

// Handle graceful shutdown
async function shutdown() {
  if (isShuttingDown) return;
  isShuttingDown = true;
  
  console.log('Shutting down gracefully...');
  
  try {
    // Close the server
    if (server) {
      await new Promise((resolve) => {
        server.close(() => {
          console.log('Server closed');
          resolve(true);
        });
      });
    }
    
    // Force exit after 1 second if graceful shutdown fails
    setTimeout(() => {
      console.log('Forcing exit...');
      process.exit(0);
    }, 1000);
    
  } catch (error) {
    console.error('Error during shutdown:', error);
    process.exit(1);
  }
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
process.on('SIGUSR2', shutdown); // Handle nodemon/tsx restart

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  registerRoutes(app);
  const server = createServer(app);

// Handle server errors
server.on('error', (error: any) => {
  console.error('Server error:', error);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (error: any) => {
  console.error('Unhandled rejection:', error);
});

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const PORT = process.env.PORT || 5000;
  server.listen(PORT, "0.0.0.0", () => {
    log(`serving on port ${PORT}`);
  });
})();
