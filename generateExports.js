const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "icons");
const outputFileJS = path.join(__dirname, "index.js");
const outputFileDTS = path.join(__dirname, "index.d.ts");

// Arrays para almacenar las líneas de exportación
const exportLinesJS = [];
const exportLinesDTS = [];

fs.readdirSync(iconsDir).forEach((category) => {
  const categoryDir = path.join(iconsDir, category);

  if (fs.lstatSync(categoryDir).isDirectory()) {
    // Leer los archivos de la subcarpeta
    fs.readdirSync(categoryDir).forEach((file) => {
      if (path.extname(file) === ".svg") {
        const componentName = path.basename(file, ".svg");
        const relativePath = `./icons/${category}/${file}`;
        exportLinesJS.push(`import ${componentName} from '${relativePath}';`);
        exportLinesJS.push(`export { ${componentName} };`);
        exportLinesDTS.push(`export const ${componentName}: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;`);
      }
    });
  }
});

// Escribir el archivo de exportaciones JavaScript
fs.writeFileSync(outputFileJS, exportLinesJS.join("\n"), "utf-8");
console.log(`Archivo de exportaciones JavaScript generado en ${outputFileJS}`);

// Añadir la importación de React en el archivo de declaraciones TypeScript
const dtsHeader = `import * as React from 'react';\n`;
fs.writeFileSync(outputFileDTS, dtsHeader + exportLinesDTS.join("\n"), "utf-8");
console.log(`Archivo de declaraciones TypeScript generado en ${outputFileDTS}`);
