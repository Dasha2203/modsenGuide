import React from 'react'

const MinusIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="4"
      fill="none"
      viewBox="0 0 19 4"
      {...props}
    >
      <path
        stroke="gray"
        strokeLinecap="round"
        strokeWidth="3"
        d="M17.02 1.724H1.898"
      ></path>
    </svg>
  );
}

export default MinusIcon