import React from 'react'

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={'100%'}
      viewBox="0 0 22 22"
      className="search-icon"
      {...props}
    >
      <path
        d="M17.493 15.58a9.782 9.782 0 001.956-5.856C19.449 4.36 15.089 0 9.724 0 4.36 0 0 4.36 0 9.724s4.36 9.725 9.724 9.725c2.102 0 4.172-.69 5.856-1.956L20.076 22 22 20.076l-4.507-4.496zm-2.886-.826a6.986 6.986 0 01-4.883 1.976 7.015 7.015 0 01-4.956-2.06 6.945 6.945 0 01-2.05-4.946c0-3.858 3.148-7.005 7.006-7.005 3.859 0 7.006 3.147 7.006 7.005 0 1.83-.7 3.566-1.976 4.883l-.147.147z"
      ></path>
    </svg>
  );
}

export default SearchIcon