import { Button } from '@mui/material'
import { SearchIcon } from 'components/Drawer/SearchBar/style'

import Input from 'components/Input'
import Label from 'components/Label'
import PlacesList from 'components/PlacesList'
import { Wrap } from './style'

const Search = () => {
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
        onClick={() => {}}

      >
        <SearchIcon />
      </Button>
    </Wrap>
  )
}

export default Search