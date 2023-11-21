import { useState } from 'react'
import { SearchIcon } from '@components/Drawer/SearchBar/styles'
import PlacesList from '@components/PlacesList'
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks'
import { Button } from '@mui/material'
import { setOpenSearchBar } from '@store/slices/app/appSlice'
import { fetchPlaces } from '@store/slices/places/actionCreators'
import { setRadius } from '@store/slices/places/placesSlice'
import Input from '@ui/Input'
import { InputContainer, InputUnit } from '@ui/Input/styles'
import Label from '@ui/Label'

import { Wrap } from './styles'

const Search = () => {
  const dispatch = useAppDispatch()
  const { userLocation } = useAppSelector(state => state.userReducer)
  const { map, checkedTypesPlaces, radius } = useAppSelector(state => state.placesReducer)
  const { openSearchBar } = useAppSelector(state => state.appReducer)
  const [inputRadius, setInputRadius] = useState(radius / 1000)
  const [query, setQuery] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value && !e.target.value.match(/^\d+$/)) return

    setInputRadius(+e.target.value)
  }

  function handleChangeQuery(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
  }

  function handleSearch() {
    if (!userLocation || !map) return

    dispatch(setRadius(inputRadius * 1000))
    dispatch(fetchPlaces({
      location: userLocation,
      radius: inputRadius * 1000,
      types: checkedTypesPlaces.map(i => i.type),
      map,
      query
    }))
    dispatch(setOpenSearchBar(!openSearchBar))
  }

  return (
    <Wrap>
      <Input label="Место, адрес" onChange={handleChangeQuery}/>
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