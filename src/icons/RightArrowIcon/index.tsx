import React from 'react'

const RightArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="#373737"
        d="M8.996 4.37l4.348 4.436c.167.17.293.356.376.555.084.199.126.412.126.64 0 .227-.042.44-.126.64a1.77 1.77 0 01-.376.554l-4.348 4.437c-.53.54-1.136.661-1.82.362-.683-.3-1.024-.832-1.023-1.599V5.607c0-.768.342-1.302 1.025-1.601.684-.3 1.29-.178 1.818.363z"
      ></path>
    </svg>
  );
}

export default RightArrowIcon