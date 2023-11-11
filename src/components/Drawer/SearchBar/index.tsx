import { WrapSearchBar } from './style'
import { Outlet } from 'react-router-dom'

const SearchBar = () => {

  return (
    <WrapSearchBar>
      {/* <AutoComplete radius={radius} types={chackedPlaces.map(item => item.type)}/> */}
      <Outlet />
    </WrapSearchBar>
  )
}

export default SearchBar