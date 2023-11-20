import { Outlet } from 'react-router-dom'

import { WrapSearchBar } from './style'

const SearchBar = () => {

  return (
    <WrapSearchBar>
      <Outlet />
    </WrapSearchBar>
  )
}

export default SearchBar