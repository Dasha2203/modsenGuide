import { Button } from '@mui/material'
import { SearchIcon } from 'components/Drawer/SearchBar/style'

import Input from 'components/Input'
import Label from 'components/Label'
import PlacesList from 'components/PlacesList'
import { Wrap } from './style'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import { fetchPlaces } from 'store/slices/places/actionCreators'

const Search = () => {
  const dispatch = useAppDispatch()
  const { userLocation } = useAppSelector(state => state.userReducer)
  const { map, checkedTypesPlaces } = useAppSelector(state => state.placesReducer)

  function handleSearch() {
    if (!userLocation || !map) return

    dispatch(fetchPlaces({
      location: userLocation,
      radius: 10000,
      types: checkedTypesPlaces.map(i => i.type),
      map
    }))
  }

  return (
    <Wrap>
      <Label>Искать:</Label>
      <PlacesList />
      <Label>В радиусе:</Label>
      <Input variant="outlined" value={23} onChange={() => { }} />

      <Button
        variant="contained"
        fullWidth
        type="submit"
        sx={{
          mt: 'auto',
          mb: '36px'
        }}
        onClick={handleSearch}

      >
        <SearchIcon />
      </Button>
    </Wrap>
  )
}

export default Search