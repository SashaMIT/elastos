import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// PNG files that should be optimized while keeping transparency
const TRANSPARENT_PNGS = [
  'Elastos Vision World Computer.png',
  'Security.png',
  'L2.png', 
  'World.png',
  'Depin.png'
];

async function optimizePNGTransparent() {
  console.log('🖼️  Starting PNG transparency optimization...\n');
  
  const imagesDir = './client/public/images';
  
  try {
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    let optimizedCount = 0;

    for (const filename of TRANSPARENT_PNGS) {
      const inputPath = path.join(imagesDir, filename);
      
      try {
        // Check if file exists
        await fs.access(inputPath);
        
        const originalStats = await fs.stat(inputPath);
        const originalSize = originalStats.size;
        totalOriginalSize += originalSize;
        
        console.log(`📂 Processing: ${filename}`);
        console.log(`   Original size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
        
        // Create backup
        const backupPath = inputPath + '.backup';
        await fs.copyFile(inputPath, backupPath);
        
        // Optimize PNG while maintaining transparency
        const optimizedBuffer = await sharp(inputPath)
          .png({
            quality: 90,
            compressionLevel: 9,
            adaptiveFiltering: true,
            force: true
          })
          .toBuffer();
        
        // Write optimized file
        await fs.writeFile(inputPath, optimizedBuffer);
        
        const optimizedSize = optimizedBuffer.length;
        totalOptimizedSize += optimizedSize;
        optimizedCount++;
        
        const reduction = ((originalSize - optimizedSize) / originalSize * 100);
        
        console.log(`   Optimized size: ${(optimizedSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`   Size reduction: ${reduction.toFixed(1)}%`);
        console.log(`   ✅ Optimized successfully!\n`);
        
      } catch (error) {
        if (error.code === 'ENOENT') {
          console.log(`   ⚠️  File not found: ${filename}\n`);
        } else {
          console.error(`   ❌ Error processing ${filename}:`, error.message);
        }
      }
    }
    
    console.log('🎉 PNG Optimization Complete!');
    console.log(`📊 Files processed: ${optimizedCount}`);
    console.log(`📈 Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📉 Total optimized size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`🎯 Total savings: ${(((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(1)}%`);
    console.log(`💾 Space saved: ${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2)} MB`);
    
  } catch (error) {
    console.error('❌ PNG optimization failed:', error);
  }
}

// Run the optimization
optimizePNGTransparent(); 