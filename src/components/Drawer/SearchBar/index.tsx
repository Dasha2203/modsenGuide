import { Outlet } from 'react-router-dom'

import { WrapSearchBar } from './style'

const SearchBar = () => {

  return (
    <WrapSearchBar>
      {/* <AutoComplete radius={radius} types={chackedPlaces.map(item => item.type)}/> */}
      <Outlet />
    </WrapSearchBar>
  )
}

export default SearchBar