import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic } from "./vite";
import { createServer } from "http";
import compression from 'compression'; // Added compression middleware

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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression({ // Enable gzip compression
    filter: (req, res) => {
      if (req.headers['x-no-compression']) {
        return false;
      }
      return compression.filter(req, res);
    },
    level: 6
  }));

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

  // Apply image optimization middleware
  const imageOptimizationMiddleware = require('./server-middleware/image-optimization'); // Assumed path
  app.use(imageOptimizationMiddleware);


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