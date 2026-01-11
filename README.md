# @lukkas98/icons

Iconos SVG como **componentes React**, pensados para **uso personal** en mis proyectos y portfolio.

---

## ✨ Características

- 🧩 Iconos como **componentes React** (`.tsx`)
- 🎨 Compatibles con **Tailwind CSS** (`className`, `w-*`, `h-*`, `text-*`)
- 🌳 **Tree-shaking** (solo se incluye lo que usás)
- 🧠 Tipados con TypeScript (`SVGProps<SVGSVGElement>`)
- 📦 Pensado para proyectos con **React / Next.js**

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
import { ReactIcon, JavascriptIcon } from "@lukkas98/icons";

export function Example() {
  return (
    <div className="flex gap-4">
      <ReactIcon className="w-8 h-8 text-cyan-400" />
      <JavascriptIcon className="w-8 h-8" />
    </div>
  );
}
```

Todos los iconos aceptan:

- `className`
- `style`
- `onClick`
- `aria-*`
- cualquier `SVGProps<SVGSVGElement>`

---

## 📁 Estructura

```txt
src/
├─ icons/
│  ├─ brands.tsx   # Tecnologías, herramientas, logos
│  ├─ ui.tsx       # Iconos genéricos de interfaz
│  └─ index.ts
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

Algunos iconos usan **colores propios** (logos).
Otros usan `currentColor` y responden a:

```tsx
className = "text-sky-500";
```

Esto es intencional.

---

## 🛠 Build

```bash
npm build
```

Genera la carpeta `dist/` con:

- JavaScript compilado
- declaraciones `.d.ts`

---

## 📌 Notas

- Este paquete está pensado para **uso personal**.
- La API puede cambiar sin previo aviso.
- No busca competir con librerías públicas de iconos.

---

## 🧑‍💻 Autor

Hecho por **lukkas98**.

Para proyectos propios, aprendizaje y portfolio.
