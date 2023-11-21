import { Outlet } from 'react-router-dom'

import { WrapSearchBar } from './styles'

const SearchBar = () => {

  return (
    <WrapSearchBar>
      <Outlet />
    </WrapSearchBar>
  )
}

export default SearchBar