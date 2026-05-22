import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, "../components");

const VALID_EXTENSIONS = [".ts", ".tsx"];
const IGNORE_FILES = ["index.ts", "index.tsx"];

function generateIndexes() {
  if (!fs.existsSync(iconsDir)) {
    console.error("❌ La carpeta de componentes no existe:", iconsDir);
    process.exit(1);
  }

  const entries = fs.readdirSync(iconsDir, { withFileTypes: true });
  const directories = entries.filter((entry) => entry.isDirectory());

  if (directories.length === 0) {
    console.warn("⚠️  No directories found in components folder");
    return;
  }

  directories.forEach((dir) => {
    try {
      const dirPath = path.join(iconsDir, dir.name);
      const files = fs.readdirSync(dirPath);

      const exports = files
        .filter((file) => {
          const ext = path.extname(file);
          return VALID_EXTENSIONS.includes(ext) && !IGNORE_FILES.includes(file);
        })
        .map((file) => {
          const fileName = path.basename(file, path.extname(file));
          return `export { Icon${fileName} } from "./${fileName}";`;
        })
        .sort();

      if (exports.length > 0) {
        const indexPath = path.join(dirPath, "index.ts");
        fs.writeFileSync(indexPath, exports.join("\n") + "\n");
        console.log(`✅ Generated index.ts in: components/${dir.name} (${exports.length} exports)`);
      } else {
        console.warn(`⚠️  No valid files found in components/${dir.name}`);
      }
    } catch (err) {
      console.error(`❌ Error processing ${dir.name}:`, err.message);
      process.exit(1);
    }
  });

  console.log("✨ Index generation completed successfully!");
}

generateIndexes();
