import { useState } from 'react'
import { Button } from '@mui/material'

import Input from 'components/Input'
import Label from 'components/Label'
import PlacesList from 'components/PlacesList'
import AutoComplete from 'components/AutoComplete'
import {SearchIcon, WrapSearchBar } from './style'
import { PlaceItem, places } from 'data/places'

const SearchBar = () => {
  const [chackedPlaces, setChackedPlaces] = useState<PlaceItem[]>([])

  function handleChange(item: PlaceItem) {
    const currentIndex = chackedPlaces.indexOf(item)
    const newChecked = [...chackedPlaces]

    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChackedPlaces(newChecked);
  }

  return (
    <WrapSearchBar>
      <AutoComplete/>
      <Label>Искать:</Label>
      <PlacesList onChange={handleChange} items={places} chacked={chackedPlaces} />
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

      >
        <SearchIcon />
      </Button>
    </WrapSearchBar>
  )
}

export default SearchBar