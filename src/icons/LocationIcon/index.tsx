import React from 'react'

const LocationIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <g clipPath="url(#clip0_1_4086)">
        <path
          fill="#000"
          d="M16 0c1.106 0 2 .894 2 2v2.169A11.991 11.991 0 0127.831 14H30c1.106 0 2 .894 2 2 0 1.106-.894 2-2 2h-2.169A11.991 11.991 0 0118 27.831V30c0 1.106-.894 2-2 2-1.106 0-2-.894-2-2v-2.169A11.991 11.991 0 014.169 18H2c-1.106 0-2-.894-2-2 0-1.106.894-2 2-2h2.169A11.991 11.991 0 0114 4.169V2c0-1.106.894-2 2-2zM8 16a8 8 0 1016 0 8 8 0 00-16 0zm8-5a5 5 0 110 10 5 5 0 010-10z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1_4086">
          <path fill="#fff" d="M0 0H32V32H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default LocationIcon