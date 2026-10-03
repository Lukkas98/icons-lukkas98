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
    console.warn("⚠️ No se encontraron directorios en la carpeta de componentes");
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
        const indexContent = exports.join("\n") + "\n";

        if (fs.existsSync(indexPath) && fs.readFileSync(indexPath, "utf-8") === indexContent) {
          console.log(`⏭️ index.ts de components/${dir.name} ya está actualizado; se omite`);
        } else {
          fs.writeFileSync(indexPath, indexContent);
          console.log(
            `✅ index.ts generado en: components/${dir.name} (${exports.length} exportaciones)`
          );
        }
      } else {
        console.warn(`⚠️ No hay archivos válidos en components/${dir.name}`);
      }
    } catch (err) {
      console.error(`❌ Error al procesar ${dir.name}:`, err.message);
      process.exit(1);
    }
  });

  console.log("✨ La generación de índices se completó correctamente!");
}

generateIndexes();
