import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define paths
const clientPublicDir = path.join(__dirname, 'client', 'public');
const distPublicDir = path.join(__dirname, 'dist', 'public');
const distServerPublicDir = path.join(__dirname, 'dist', 'server', 'public');

// Function to ensure directory exists
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
}

// Function to copy directory recursively
function copyDirectory(source, destination) {
  ensureDirectoryExists(destination);

  const files = fs.readdirSync(source);
  for (const file of files) {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);
    
    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      copyDirectory(sourcePath, destPath);
    } else {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied: ${sourcePath} -> ${destPath}`);
    }
  }
}

// Ensure destination directories exist
ensureDirectoryExists(distPublicDir);
ensureDirectoryExists(distServerPublicDir);

// Copy assets from client/public to dist/public and dist/server/public
console.log('Copying assets from client/public to dist/public...');
copyDirectory(clientPublicDir, distPublicDir);

console.log('Copying assets from dist/public to dist/server/public...');
copyDirectory(distPublicDir, distServerPublicDir);

console.log('Asset copying completed successfully!'); 