import type { SVGProps } from "react";

export function IconArrowBadgeDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 13V7l-5 4l-5-4v6l5 4z"
      ></path>
    </svg>
  );
}
