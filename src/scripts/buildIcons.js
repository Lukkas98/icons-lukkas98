import { transform } from "@svgr/core";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

async function processIcons(type) {
  const { input, output, replaceColor } = CONFIG[type];
  await fs.mkdir(output, { recursive: true });

  const files = await fs.readdir(input);
  const svgFiles = files.filter((f) => f.endsWith(".svg"));

  for (const file of svgFiles) {
    const svgCode = await fs.readFile(path.join(input, file), "utf-8");

    const baseName = file
      .replace(".svg", "")
      .split(/[-_]/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");

    const finalName = `Icon${baseName}`;

    const jsCode = await transform(
      svgCode,
      {
        typescript: true,
        icon: true,
        expandProps: "end",
        template: (variables, { tpl }) => {
          return tpl`
            import type { IconProps } from "../../types";

            export const ${finalName} = (props: IconProps) => (
              ${variables.jsx}
            );
          `;
        },
        replaceAttrValues: replaceColor ? { "#292D32": "currentColor" } : {},
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
      },
      { componentName: baseName }
    );

    await fs.writeFile(path.join(output, `${baseName}.tsx`), jsCode);
    console.log(`✅ ${finalName} generado`);
  }
}

async function run() {
  try {
    console.log("🚀 Generando iconos...");
    await processIcons("ui");
    await processIcons("brands");
    console.log("✨ ¡componentes creados!");
  } catch (err) {
    console.error("❌ Error:", err);
  }
}

run();
