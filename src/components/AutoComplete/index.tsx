
import { Avatar, InputAdornment } from '@mui/material'
import { AutoCompleteInput, StyledAutoComplete } from './style'

const AutoComplete = () => {
  return (
    <StyledAutoComplete
      // freeSolo
      // onChange={(event, value) => console.log(value)}
      disableClearable
      options={[]}

      renderInput={(params) => (
        <AutoCompleteInput
          variant="outlined"
          label="Место"
          placeholder="Место"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Avatar sx={{ w: '20px', h: '20px' }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  )
}

export default AutoComplete