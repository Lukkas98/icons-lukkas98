import type { SVGProps } from "react";

export function IconArrowBadgeLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 17h6l-4-5l4-5h-6l-4 5z"
      ></path>
    </svg>
  );
}
