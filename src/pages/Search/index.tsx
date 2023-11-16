import { Button } from '@mui/material'
import { SearchIcon } from 'components/Drawer/SearchBar/style'

import Input from 'components/Input'
import Label from 'components/Label'
import PlacesList from 'components/PlacesList'
import { Wrap } from './style'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import { fetchPlaces } from 'store/slices/places/actionCreators'
import { useState } from 'react'
import { setRadius } from 'store/slices/places/placesSlice'
import { InputContainer, InputUnit } from 'components/Input/style'

const Search = () => {
  const dispatch = useAppDispatch()
  const { userLocation } = useAppSelector(state => state.userReducer)
  const { map, checkedTypesPlaces, radius } = useAppSelector(state => state.placesReducer)
  const [inputRadius, setInputRadius] = useState(radius / 1000)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value.match(/^\d+$/)) return

    setInputRadius(+e.target.value)
  }

  function handleSearch() {
    if (!userLocation || !map) return

    dispatch(setRadius(inputRadius * 1000))
    dispatch(fetchPlaces({
      location: userLocation,
      radius: inputRadius * 1000,
      types: checkedTypesPlaces.map(i => i.type),
      map
    }))
  }

  return (
    <Wrap>
      <Label>Искать:</Label>
      <PlacesList />
      <Label>В радиусе:</Label>
      <InputContainer>
        <Input size="small" variant="outlined" value={inputRadius} onChange={handleChange} />
        <InputUnit>км</InputUnit>
      </InputContainer>

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