import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = __dirname;

const VALID_EXTENSIONS = [".ts", ".tsx"];
const IGNORE_FILES = ["index.ts", "index.tsx"];

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
        const name = path.basename(file, path.extname(file));
        return `export { ${name} } from "./${name}";`;
      })
      .sort();

    if (!exports.length) return;

    fs.writeFileSync(path.join(dirPath, "index.ts"), exports.join("\n") + "\n");

    console.log(`✅ index.ts generado en icons/${dir.name}`);
  });
