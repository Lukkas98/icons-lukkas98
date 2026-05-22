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

```bash
pnpm install
pnpm build
pnpm test
pnpm storybook
```

Los SVG originales están en `src/raw-icons/`. Los componentes se generan automáticamente y no hace falta versionar `src/components/`.
