import { transform } from "@svgr/core";
import { createHash } from "crypto";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const manifestPath = path.join(__dirname, "../components/.icons-manifest.json");

const CONFIG = {
  ui: {
    input: path.join(__dirname, "../raw-icons/ui"),
    output: path.join(__dirname, "../components/ui"),
    replaceColor: true,
  },
  brands: {
    input: path.join(__dirname, "../raw-icons/brands"),
    output: path.join(__dirname, "../components/brands"),
    replaceColor: false,
  },
};

function hash(content) {
  return createHash("sha256").update(content).digest("hex");
}

function getBaseName(file) {
  return file
    .replace(".svg", "")
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

async function readManifest() {
  try {
    const manifest = JSON.parse(await fs.readFile(manifestPath, "utf-8"));

    if (
      typeof manifest.generatorHash === "string" &&
      manifest.icons &&
      typeof manifest.icons === "object"
    ) {
      return manifest;
    }

    console.warn("⚠️ El registro de generación no es válido; se regenerarán los iconos.");
  } catch (err) {
    if (err.code !== "ENOENT" && !(err instanceof SyntaxError)) {
      throw err;
    }

    if (err instanceof SyntaxError) {
      console.warn("⚠️ No se pudo leer el registro de generación; se regenerarán los iconos.");
    }
  }

  return { generatorHash: "", icons: {} };
}

async function processIcons(type, manifest, generatorHash, stats) {
  const { input, output, replaceColor } = CONFIG[type];

  // Validar que la carpeta input existe
  try {
    await fs.access(input);
  } catch {
    throw new Error(`❌ No se encontró la carpeta de entrada: ${input}`);
  }

  await fs.mkdir(output, { recursive: true });

  const files = await fs.readdir(input);
  const svgFiles = files.filter((f) => f.endsWith(".svg"));
  const expectedOutputs = new Set(svgFiles.map((file) => `${getBaseName(file)}.tsx`));

  if (svgFiles.length === 0) {
    console.warn(`⚠️ No se encontraron archivos SVG en ${input}`);
  }

  for (const outputFile of await fs.readdir(output)) {
    if (outputFile.endsWith(".tsx") && !expectedOutputs.has(outputFile)) {
      await fs.rm(path.join(output, outputFile));
      stats.removed += 1;
      console.log(`🗑️ Se eliminó el componente sin SVG correspondiente: ${outputFile}`);
    }
  }

  for (const file of svgFiles) {
    try {
      const sourcePath = path.join(input, file);
      const svgCode = await fs.readFile(sourcePath, "utf-8");
      const sourceHash = hash(svgCode);
      const baseName = getBaseName(file);
      const finalName = `Icon${baseName}`;
      const outputPath = path.join(output, `${baseName}.tsx`);
      const manifestKey = `${type}/${file}`;
      const previous = manifest.icons[manifestKey];

      if (
        manifest.generatorHash === generatorHash &&
        previous?.sourceHash === sourceHash &&
        previous?.generatorHash === generatorHash
      ) {
        try {
          const existingOutput = await fs.readFile(outputPath);
          if (hash(existingOutput) === previous.outputHash) {
            stats.skipped += 1;
            continue;
          }
        } catch (err) {
          if (err.code !== "ENOENT") {
            throw err;
          }
        }
      }

      const jsCode = await transform(
        svgCode,
        {
          typescript: true,
          icon: true,
          expandProps: "end",
          template: (variables, { tpl }) => {
            return tpl`
              import { cloneElement } from "react";
              import type { IconProps } from "../../types";

              export const ${finalName} = ({ size, ...props }: IconProps) =>
                cloneElement(${variables.jsx}, {
                  width: size ?? "1em",
                  height: size ?? "1em",
                  ...props,
                });
            `;
          },
          replaceAttrValues: replaceColor ? { "#292D32": "currentColor" } : {},
          plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        },
        { componentName: baseName }
      );

      await fs.writeFile(outputPath, jsCode);
      manifest.icons[manifestKey] = {
        sourceHash,
        generatorHash,
        outputHash: hash(jsCode),
      };
      stats.generated += 1;
      console.log(`✅ ${finalName} generado`);
    } catch (err) {
      console.error(`❌ Error al procesar ${file}:`, err.message);
      throw err;
    }
  }
}

async function run() {
  try {
    const manifest = await readManifest();
    const generatorHash = hash(await fs.readFile(fileURLToPath(import.meta.url)));
    const previousManifest = JSON.stringify(manifest);
    const types = Object.keys(CONFIG);
    const stats = { generated: 0, skipped: 0, removed: 0 };

    console.log("🚀 Revisando iconos...");
    for (const type of types) {
      await processIcons(type, manifest, generatorHash, stats);
    }

    manifest.generatorHash = generatorHash;

    if (JSON.stringify(manifest) !== previousManifest) {
      await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
    }

    if (stats.generated === 0 && stats.removed === 0) {
      console.log(`✨ Los ${stats.skipped} componentes ya están generados; se omiten.`);
    } else {
      console.log(
        `✨ Generación completada: ${stats.generated} generados, ${stats.skipped} omitidos, ${stats.removed} eliminados.`
      );
    }
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
}

run();
