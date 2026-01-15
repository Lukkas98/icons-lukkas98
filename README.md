# @lukkas98/icons

Iconos SVG como **componentes React**, pensados para **uso personal** en mis proyectos y portfolio.

---

## ✨ Características

- 🧩 Iconos como **componentes React** (`.tsx`)
- 🎨 Compatibles con **Tailwind CSS** (`className`, `w-*`, `h-*`, `text-*`)
- 🌳 **Tree-shaking** (solo se incluye lo que usás)
- 🧠 Tipados con TypeScript (`SVGProps<SVGSVGElement>`)
- 📦 Pensado para proyectos con **React / Next.js**
- 📂 Organización por dominios (`ui`, `brands`)

---

## 📦 Instalación

```bash
npm install @lukkas98/icons
# o
pnpm add @lukkas98/icons
```

---

## 🚀 Uso básico

```tsx
import { IconArrowBadgeDown, IconJavascript } from "@lukkas98/icons";

export function Example() {
  return (
    <div className="flex gap-4">
      <IconArrowBadgeDown className="w-8 h-8 text-cyan-400" />
      <IconJavascript className="w-8 h-8" />
    </div>
  );
}
```

Tambien se permiten exportaciones por UI o brands

```tsx
import { IconArrowBadgeDown } from "@lukkas98/icons/ui";
import { IconJavascript } from "@lukkas98/icons/brands";
```

Todos los iconos aceptan:

- `className`
- `style`
- `onClick`
- cualquier `SVGProps<SVGSVGElement>`

---

## 📁 Estructura

```txt
src/
├─ raw-icons/    # SVGs originales (Fuentes)
├─ components/   # Componentes generados (No editar)
├─ scripts/      # Automatización (SVGR + Index gen)
└─ types.ts      # Definición de IconProps
```

---

## 🎨 Colores

Los iconos de marcas mantienen sus **colores originales**,
Los iconos de UI usan `currentColor`

```tsx
<IconArrowBadgeDown className="text-emerald-500" />
// o
<IconArrowBadgeDown color="#10b981" />
```

Esto es intencional.

---

## 🛠 Build

```bash
npm build
```

Esto ejecuta

- Generación automática de los componentes e índices
- Compilación de TypeScript
- Salida final en `dist/`

---

## 📌 Notas

- Este paquete está pensado para **uso personal**.
- La API puede cambiar sin previo aviso.
- No busca competir con librerías públicas de iconos.

---

## 📜 Licencias

- Licencia: MIT
- Los iconos pertenecen a sus respectivos autores
- Ver [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md)

---

## 🧑‍💻 Autor

Hecho por **lukkas98**.

Para proyectos propios, aprendizaje y portfolio.
