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
import { IconArrowBadgeDown, JavascriptIcon } from "@lukkas98/icons";

export function Example() {
  return (
    <div className="flex gap-4">
      <ReactIcon className="w-8 h-8 text-cyan-400" />
      <JavascriptIcon className="w-8 h-8" />
    </div>
  );
}
```

Tambien se permiten exportaciones por UI o brands

```tsx
import { IconArrowBadgeDown } from "@lukkas98/icons/ui";
import { JavascriptIcon } from "@lukkas98/icons/brands";
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
├─ icons/
│  ├─ ui/
│  │  ├─ IconArrowBadgeDown.tsx
│  │  ├─ ...
│  │  └─ index.ts
│  ├─ brands/
│  │  ├─ IconReact.tsx
│  │  ├─ ...
│  │  └─ index.ts
│  └─ generateIndex.ts
└─ index.ts
```

### `brands`

Iconos de tecnologías, frameworks y herramientas:

- JavaScript
- React
- Next.js
- Node.js
- MongoDB
- PostgreSQL
- Tailwind
- Git
- npm / pnpm
- etc.

### `ui`

Iconos genéricos reutilizables en interfaces:

- arrows
- check / close
- menu
- search

---

## 🎨 Colores

Los iconos de marcas mantienen sus **colores originales**,
Los iconos de UI usan `currentColor`

```tsx
<IconArrowBadgeDown className="text-emerald-500" />
```

Esto es intencional.

---

## 🛠 Build

```bash
pnpm build
```

Esto ejecuta

- Generación automática de `index.ts`
- Compilación de TypeScript
- Salida final en `dist/`

---

## 📌 Notas

- Este paquete está pensado para **uso personal**.
- La API puede cambiar sin previo aviso.
- No busca competir con librerías públicas de iconos.

---

## 📜 Licencias

- El código del paquete: MIT
- Los iconos pertenecen a sus respectivos autores
- Ver [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md)

---

## 🧑‍💻 Autor

Hecho por **lukkas98**.

Para proyectos propios, aprendizaje y portfolio.
