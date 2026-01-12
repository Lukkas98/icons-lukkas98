import type { SVGProps } from "react";

export function IconArrowBadgeRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7H7l4 5l-4 5h6l4-5z"
      ></path>
    </svg>
  );
}
