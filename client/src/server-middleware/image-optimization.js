
/**
 * Server middleware for image optimization
 * This will handle image compression, format conversion, and resizing
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs/promises');
const { existsSync } = require('fs');

// Cache directory for optimized images
const CACHE_DIR = path.join(process.cwd(), 'public', 'cache');

// Ensure cache directory exists
async function ensureCacheDir() {
  try {
    await fs.mkdir(CACHE_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating cache directory:', error);
  }
}

// Initialize on startup
ensureCacheDir();

/**
 * Middleware function for image optimization
 */
async function imageOptimizationMiddleware(req, res, next) {
  // Only process image requests from the public directory
  if (!req.url.match(/\.(jpe?g|png|webp|avif|gif)(\?.*)?$/i)) {
    return next();
  }

  // Parse the URL and query parameters
  const url = new URL(req.url, `http://${req.headers.host}`);
  
  // Extract image optimization parameters
  const width = parseInt(url.searchParams.get('w')) || null;
  const height = parseInt(url.searchParams.get('h')) || null;
  const quality = parseInt(url.searchParams.get('q')) || 80;
  const format = url.searchParams.get('fmt') || path.extname(url.pathname).substring(1) || 'webp';
  
  // Remove query parameters to get the original file path
  const originalPath = path.join(process.cwd(), 'public', url.pathname);
  
  // Check if the original file exists
  if (!existsSync(originalPath)) {
    return next();
  }
  
  // Create a cache key based on the optimization parameters
  const cacheKey = `${path.basename(url.pathname, path.extname(url.pathname))}-w${width || 'auto'}-h${height || 'auto'}-q${quality}.${format}`;
  const cachePath = path.join(CACHE_DIR, cacheKey);
  
  try {
    // Check if we have a cached version
    if (existsSync(cachePath)) {
      // Serve from cache with appropriate headers
      const stats = await fs.stat(cachePath);
      res.setHeader('Content-Type', `image/${format}`);
      res.setHeader('Content-Length', stats.size);
      res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
      res.setHeader('X-Cache', 'HIT');
      const fileStream = fs.createReadStream(cachePath);
      fileStream.pipe(res);
      return;
    }
    
    // Load the original image
    const image = sharp(originalPath);
    
    // Apply transformations
    if (width || height) {
      image.resize(width, height, { fit: 'cover' });
    }
    
    // Convert format if needed
    switch (format) {
      case 'webp':
        image.webp({ quality });
        break;
      case 'avif':
        image.avif({ quality });
        break;
      case 'png':
        image.png({ quality });
        break;
      case 'jpg':
      case 'jpeg':
        image.jpeg({ quality });
        break;
    }
    
    // Save to cache
    await image.toFile(cachePath);
    
    // Serve the optimized image
    const optimizedBuffer = await image.toBuffer();
    res.setHeader('Content-Type', `image/${format}`);
    res.setHeader('Content-Length', optimizedBuffer.length);
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
    res.setHeader('X-Cache', 'MISS');
    res.send(optimizedBuffer);
  } catch (error) {
    console.error('Image optimization error:', error);
    // Fall back to the original image
    next();
  }
}

module.exports = imageOptimizationMiddleware;
