import React from 'react'

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      fill="none"
      viewBox="0 0 19 19"
      {...props}
    >
      <path
        stroke="gray"
        strokeLinecap="round"
        strokeWidth="3"
        d="M9.561 2.163v15.122M17.122 9.724H2"
      ></path>
    </svg>
  );
}

export default PlusIcon