import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Images that must remain PNG (transparent backgrounds, logos, etc.)
const KEEP_PNG = [
  'Elastos Vision World Computer.png',
  'Elastos Icon - 2.png',
  'Elastos New Logo_Kit-01.png',
  'Elastos New Logo_Kit-02.png',
  'Elastos New Logo_Kit-03.png',
  'Elastos Logo Light - 1.png',
  'Elastos Logo Dark - 1.png',
  'Security.png',
  'L2.png',
  'World.png',
  'Depin.png'
];

// Priority images to optimize first (large file sizes)
const PRIORITY_IMAGES = [
  'Elastos Celebration.png',
  'Community crowd.png', 
  'Rong Pomp.png',
  'Elacity.png',
  'ElastOS 1.png',
  'Essentials.png',
  'Elastosvideoimage.png',
  'Rong Chen.png'
];

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const stats = await fs.stat(inputPath);
    const originalSize = stats.size;
    
    const pipeline = sharp(inputPath);
    
    // Get image metadata
    const metadata = await pipeline.metadata();
    
    // Check if image should remain PNG
    const filename = path.basename(inputPath);
    const shouldKeepPNG = KEEP_PNG.some(keepFile => filename.includes(keepFile.replace('.png', '')));
    
    if (shouldKeepPNG) {
      console.log(`⏭️  Skipping ${filename} (must remain PNG for transparency)`);
      return { skipped: true, reason: 'transparency' };
    }
    
    // Determine optimal format and quality
    let format = 'webp';
    let quality = 85;
    
    // For very large images, use more aggressive compression
    if (originalSize > 1000000) { // > 1MB
      quality = 75;
    }
    
    // Create WebP version
    const webpOutputPath = outputPath.replace(/\.(jpe?g|png)$/i, '.webp');
    
    await pipeline
      .webp({ quality, effort: 6 })
      .toFile(webpOutputPath);
    
    const webpStats = await fs.stat(webpOutputPath);
    const webpSize = webpStats.size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${filename}: ${formatBytes(originalSize)} → ${formatBytes(webpSize)} (${savings}% smaller)`);
    
    return {
      original: originalSize,
      optimized: webpSize,
      savings: parseFloat(savings),
      format: 'webp'
    };
    
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
    return { error: error.message };
  }
}

async function createResponsiveVersions(inputPath, outputDir, sizes = [400, 800, 1200]) {
  try {
    const filename = path.basename(inputPath, path.extname(inputPath));
    const results = [];
    
    for (const width of sizes) {
      const outputPath = path.join(outputDir, `${filename}-${width}w.webp`);
      
      await sharp(inputPath)
        .resize(width, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);
      
      const stats = await fs.stat(outputPath);
      results.push({
        width,
        size: stats.size,
        path: outputPath
      });
    }
    
    return results;
  } catch (error) {
    console.error(`❌ Error creating responsive versions for ${inputPath}:`, error.message);
    return [];
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function findImages(dir, extensions = ['.jpg', '.jpeg', '.png']) {
  const images = [];
  
  async function scanDir(currentDir) {
    const items = await fs.readdir(currentDir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item.name);
      
      if (item.isDirectory()) {
        await scanDir(fullPath);
      } else if (extensions.some(ext => item.name.toLowerCase().endsWith(ext))) {
        images.push(fullPath);
      }
    }
  }
  
  await scanDir(dir);
  return images;
}

async function main() {
  console.log('🖼️  Starting Elastos Image Optimization...\n');
  
  const imageDir = './client/public/images';
  const optimizedDir = './client/public/images-optimized';
  
  // Create optimized directory
  try {
    await fs.mkdir(optimizedDir, { recursive: true });
  } catch (error) {
    // Directory might already exist
  }
  
  // Find all images
  const images = await findImages(imageDir);
  console.log(`Found ${images.length} images to process\n`);
  
  // Sort by priority (large files first)
  const priorityImages = images.filter(img => 
    PRIORITY_IMAGES.some(priority => img.includes(priority.replace('.png', '').replace('.jpg', '')))
  );
  const otherImages = images.filter(img => !priorityImages.includes(img));
  
  const sortedImages = [...priorityImages, ...otherImages];
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  let processedCount = 0;
  let skippedCount = 0;
  
  console.log('📊 Processing Priority Images First:\n');
  
  for (const imagePath of sortedImages) {
    const relativePath = path.relative(imageDir, imagePath);
    const outputPath = path.join(optimizedDir, relativePath);
    
    // Ensure output directory exists
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    
    const result = await optimizeImage(imagePath, outputPath);
    
    if (result.skipped) {
      skippedCount++;
    } else if (!result.error) {
      totalOriginal += result.original;
      totalOptimized += result.optimized;
      processedCount++;
    }
  }
  
  console.log('\n📈 Optimization Results:');
  console.log(`✅ Processed: ${processedCount} images`);
  console.log(`⏭️  Skipped: ${skippedCount} images (kept as PNG)`);
  console.log(`💾 Total savings: ${formatBytes(totalOriginal - totalOptimized)} (${((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1)}%)`);
  console.log(`📁 Original total: ${formatBytes(totalOriginal)}`);
  console.log(`📁 Optimized total: ${formatBytes(totalOptimized)}`);
  
  console.log('\n🔄 Creating responsive versions for key images...');
  
  // Create responsive versions for hero images
  const heroImages = [
    './client/public/images/Elacity.png',
    './client/public/images/ElastOS 1.png',
    './client/public/images/Essentials.png',
    './client/public/images/Rong Chen.png'
  ];
  
  for (const heroImage of heroImages) {
    try {
      await fs.access(heroImage);
      const responsiveDir = path.join(optimizedDir, 'responsive');
      await fs.mkdir(responsiveDir, { recursive: true });
      
      const responsive = await createResponsiveVersions(heroImage, responsiveDir);
      console.log(`📱 Created ${responsive.length} responsive versions for ${path.basename(heroImage)}`);
    } catch (error) {
      console.log(`⚠️  Could not create responsive versions for ${heroImage}: ${error.message}`);
    }
  }
  
  console.log('\n✅ Image optimization complete!');
  console.log('\n📝 Next Steps:');
  console.log('1. Review optimized images in ./client/public/images-optimized/');
  console.log('2. Update image references in components to use .webp versions');
  console.log('3. Implement fallback system for browsers that don\'t support WebP');
  console.log('4. Replace original files with optimized versions when ready');
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { optimizeImage, createResponsiveVersions, formatBytes }; 