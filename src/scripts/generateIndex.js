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
    console.error("❌ La carpeta de componentes no existe.");
    return;
  }

  const entries = fs.readdirSync(iconsDir, { withFileTypes: true });

  entries
    .filter((entry) => entry.isDirectory())
    .forEach((dir) => {
      const dirPath = path.join(iconsDir, dir.name);
      const files = fs.readdirSync(dirPath);

      const exports = files
        .filter((file) => {
          const ext = path.extname(file);
          return VALID_EXTENSIONS.includes(ext) && !IGNORE_FILES.includes(file);
        })
        .map((file) => {
          const fileName = path.basename(file, path.extname(file));
          const componentName = `Icon${fileName}`;
          return `export { ${componentName} } from "./${fileName}";`;
        })
        .sort();

      if (exports.length > 0) {
        fs.writeFileSync(
          path.join(dirPath, "index.ts"),
          exports.join("\n") + "\n"
        );
        console.log(`✅ index.ts generado en: components/${dir.name}`);
      }
    });
}

generateIndexes();
