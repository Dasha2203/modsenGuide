import { Autocomplete, Button, Typography } from '@mui/material'

import Input from 'components/Input'
import { SearchIcon, WrapSearchBar } from './style'
import List from 'components/List'
import Label from 'components/Label'

const SearchBar = () => {

  return (
    <WrapSearchBar>
      <Autocomplete
        freeSolo
        onChange={(event, value) => console.log(value)}
        id="free-solo-2-demo"
        disableClearable
        options={[]}

        renderInput={(params) => (
          <Input
            variant="outlined"
            {...params}
            value={'value'}
            label="Место"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            onChange={() => { }}
          />
        )}
      />
      <Label>Искать:</Label>
      <List />
      <Label>В радиусе:</Label>
      <Input variant="outlined" value={23} onChange={() => {}}/>

      <Button
        variant="contained"
        fullWidth
        type="submit"
        sx={{
          mt: '25px'
        }}

      >
        <SearchIcon />
      </Button>
    </WrapSearchBar>
  )
}

export default SearchBar