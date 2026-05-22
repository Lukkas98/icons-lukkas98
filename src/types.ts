import { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  /**
   * Tamaño del icono en pixels o unidades CSS (aplica a width y height)
   * @example size={24} // 24px
   * @example size="1.5rem" // 1.5rem
   */
  size?: number | string;
  /**
   * Color del icono (solo para iconos UI que usan currentColor)
   * @example color="#10b981"
   * @example color="red"
   */
  color?: string;
}
