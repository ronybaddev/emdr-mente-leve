import sharp from "sharp";
import { readFileSync, existsSync, renameSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

async function optimizeImage(inputPath, options, label) {
  if (!existsSync(inputPath)) {
    console.log(`⚠️  Arquivo não encontrado: ${inputPath}`);
    return;
  }

  const tempPath = inputPath + ".tmp";
  const beforeSize = readFileSync(inputPath).length;
  await options(sharp(inputPath)).toFile(tempPath);
  renameSync(tempPath, inputPath);
  const afterSize = readFileSync(inputPath).length;

  const saved = (((beforeSize - afterSize) / beforeSize) * 100).toFixed(1);
  const kb = (n) => (n / 1024).toFixed(1) + " KB";

  console.log(`✅ ${label}`);
  console.log(`   Antes:  ${kb(beforeSize)}`);
  console.log(`   Depois: ${kb(afterSize)}`);
  console.log(`   Redução: ${saved}%\n`);
}

console.log("🖼️  Iniciando otimização de imagens...\n");

// 1. Avatar da psicóloga: 1.5 MB → alvo < 120 KB
await optimizeImage(
  path.join(root, "src/assets/img-site-2.jpg"),
  (s) => s.jpeg({ quality: 78, progressive: true }),
  "Avatar da Psicóloga (img-site-2.jpg)"
);

// 2. Hero desktop: 287 KB → alvo < 100 KB
await optimizeImage(
  path.join(root, "src/assets/hero-image.jpg"),
  (s) => s.jpeg({ quality: 75, progressive: true }),
  "Hero Desktop (hero-image.jpg)"
);

// 3. Hero mobile: já é pequeno, otimizar levemente
await optimizeImage(
  path.join(root, "src/assets/hero-image-mobile.jpg"),
  (s) => s.jpeg({ quality: 78, progressive: true }),
  "Hero Mobile (hero-image-mobile.jpg)"
);

// 4. Favicon: 2.8 MB → alvo < 60 KB (redimensionar + comprimir)
await optimizeImage(
  path.join(root, "public/favicon.png"),
  (s) => s.resize(512, 512, { fit: "inside", withoutEnlargement: true }).png({ quality: 80, compressionLevel: 9 }),
  "Favicon (favicon.png)"
);

console.log("🎉 Otimização concluída!");
