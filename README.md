# @lukkas98/icons

Iconos SVG como componentes React.

## Instalación

```bash
pnpm add @lukkas98/icons
```

## Uso

```tsx
import { IconArrowBadgeDown, IconReact } from "@lukkas98/icons";

export function Example() {
  return (
    <>
      <IconArrowBadgeDown size={24} />
      <IconReact size={32} />
    </>
  );
}
```

También se pueden importar por categoría:

```tsx
import { IconArrowBadgeDown } from "@lukkas98/icons/ui";
import { IconReact } from "@lukkas98/icons/brands";
```

## Iconos disponibles

**UI:** `IconArrowBadgeDown`, `IconArrowBadgeUp`, `IconArrowBadgeLeft`, `IconArrowBadgeRight`

**Marcas:** `IconCss`, `IconExpressjs`, `IconFramerMotion`, `IconGit`, `IconGithub`, `IconHtml`, `IconJavascript`, `IconLinkedin`, `IconMongodb`, `IconMongoose`, `IconNetlify`, `IconNextjs`, `IconNodejs`, `IconNpm`, `IconPnpm`, `IconPostgresql`, `IconReact`, `IconReactRouter`, `IconRedux`, `IconSequelize`, `IconTailwindcss`, `IconTypescript`, `IconVercel`, `IconZod`

## Desarrollo y build

Requiere Node.js 22.13 o superior y pnpm 12.8.1.

```bash
pnpm install
pnpm generate
pnpm lint
pnpm test
pnpm build
pnpm storybook
```

Los SVG originales de `src/raw-icons/` son la fuente de verdad. Ejecutá `pnpm generate` para crear los componentes en `src/components/` antes de lint, test, build o Storybook. Esa carpeta es generada y no se versiona.
