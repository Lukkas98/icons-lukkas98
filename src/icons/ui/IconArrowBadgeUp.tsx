import type { SVGProps } from "react";

export function IconArrowBadgeUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 11v6l-5-4l-5 4v-6l5-4z"
      ></path>
    </svg>
  );
}
