import React from 'react'

const LeftArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      fill="none"
      viewBox="0 0 22 22"
      {...props}
    >
      <path
        fill="#373737"
        d="M12.104 17.194l-4.783-4.88a1.95 1.95 0 01-.414-.611 1.8 1.8 0 01-.138-.704c0-.25.046-.485.138-.704a1.95 1.95 0 01.414-.61l4.783-4.88c.582-.595 1.25-.727 2-.398.753.329 1.128.915 1.127 1.759v9.667c0 .844-.376 1.431-1.128 1.76-.752.33-1.418.196-2-.4z"
      ></path>
    </svg>
  );
}

export default LeftArrowIcon