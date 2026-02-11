const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Settings
const INPUT_DIR = './public'; 
const OUTPUT_DIR = './public/optimized';
const MAX_WIDTH = 1300; // Large enough for Hero, small enough to be fast
const QUALITY = 80;

function processDirectory(directory) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const inputPath = path.join(directory, file);
    const stats = fs.statSync(inputPath);

    if (stats.isDirectory()) {
      // Don't process the output folder itself to avoid infinite loops
      if (file === 'optimized' || file === 'node_modules') return;
      processDirectory(inputPath);
    } else if (/\.(jpe?g|png|tiff|webp)$/i.test(file)) {
      // It's an image, let's optimize it
      const relativePath = path.relative(INPUT_DIR, directory);
      const targetFolder = path.join(OUTPUT_DIR, relativePath);

      if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder, { recursive: true });
      }

      const outputName = path.parse(file).name + '.webp';
      const outputPath = path.join(targetFolder, outputName);

      sharp(inputPath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outputPath)
        .then(() => console.log(`✅ Optimized: ${path.join(relativePath, file)}`))
        .catch(err => console.error(`❌ Error ${file}:`, err.message));
    }
  });
}

console.log('🚀 Starting recursive optimization...');
processDirectory(INPUT_DIR);