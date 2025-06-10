import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function replaceOptimizedImages() {
  console.log('🔄 Starting image replacement process...\n');
  
  const originalDir = './client/public/images';
  const optimizedDir = './client/public/images-optimized';
  const backupDir = './client/public/images-backup';
  
  try {
    // Create backup directory
    await fs.mkdir(backupDir, { recursive: true });
    console.log('📁 Created backup directory');
    
    // Get all WebP files from optimized directory
    const webpFiles = await findFiles(optimizedDir, '.webp');
    console.log(`📊 Found ${webpFiles.length} optimized WebP files\n`);
    
    let replacedCount = 0;
    let backedUpCount = 0;
    
    for (const webpFile of webpFiles) {
      // Determine original file path
      const relativePath = path.relative(optimizedDir, webpFile);
      const originalPath = path.join(originalDir, relativePath);
      
      // Find corresponding original file (PNG or JPG)
      const originalPng = originalPath.replace('.webp', '.png');
      const originalJpg = originalPath.replace('.webp', '.jpg');
      const originalJpeg = originalPath.replace('.webp', '.jpeg');
      
      let foundOriginal = null;
      
      // Check which original exists
      for (const candidate of [originalPng, originalJpg, originalJpeg]) {
        try {
          await fs.access(candidate);
          foundOriginal = candidate;
          break;
        } catch {
          // File doesn't exist, continue
        }
      }
      
      if (foundOriginal) {
        try {
          // Create backup of original
          const backupPath = path.join(backupDir, path.relative(originalDir, foundOriginal));
          await fs.mkdir(path.dirname(backupPath), { recursive: true });
          await fs.copyFile(foundOriginal, backupPath);
          backedUpCount++;
          
          // Copy WebP to original directory (keeping WebP extension)
          const webpTargetPath = path.join(originalDir, relativePath);
          await fs.mkdir(path.dirname(webpTargetPath), { recursive: true });
          await fs.copyFile(webpFile, webpTargetPath);
          replacedCount++;
          
          const originalStats = await fs.stat(foundOriginal);
          const webpStats = await fs.stat(webpFile);
          const savings = ((originalStats.size - webpStats.size) / originalStats.size * 100).toFixed(1);
          
          console.log(`✅ ${path.basename(foundOriginal)} → ${path.basename(webpFile)} (${savings}% smaller)`);
          
        } catch (error) {
          console.error(`❌ Error processing ${foundOriginal}:`, error.message);
        }
      }
    }
    
    console.log('\n📈 Replacement Summary:');
    console.log(`✅ Backed up: ${backedUpCount} original files`);
    console.log(`🔄 Replaced: ${replacedCount} files with WebP versions`);
    console.log(`📁 Backups stored in: ${backupDir}`);
    
    console.log('\n🎯 Next Steps:');
    console.log('1. Test the website to ensure all images load correctly');
    console.log('2. Update image references in code to use .webp extensions');
    console.log('3. If everything works, you can remove the backup directory');
    console.log('4. Deploy the optimized website');
    
  } catch (error) {
    console.error('❌ Error during replacement process:', error);
  }
}

async function findFiles(dir, extension) {
  const files = [];
  
  async function scanDir(currentDir) {
    const items = await fs.readdir(currentDir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item.name);
      
      if (item.isDirectory()) {
        await scanDir(fullPath);
      } else if (item.name.toLowerCase().endsWith(extension)) {
        files.push(fullPath);
      }
    }
  }
  
  await scanDir(dir);
  return files;
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  replaceOptimizedImages().catch(console.error);
} 