
import { useEffect } from 'react';
import { PlacesTypesEnum } from '@consts';
import { Avatar, InputAdornment, TextField } from '@mui/material'
import usePlacesAutocomplete from 'use-places-autocomplete';

import { AutoCompleteInput, StyledAutoComplete } from './styles'

const AutoComplete = ({ radius, types }: { radius: number, types: PlacesTypesEnum[] }) => {
  const {
    ready,
    value,
    init,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
      
    },
    debounce: 300,
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <StyledAutoComplete
      freeSolo
      onChange={(event, value) => console.log(value)}
      id="free-solo-2-demo"
      disableClearable
      options={data.map((option) => option.structured_formatting.main_text + ' : ' + option.structured_formatting.secondary_text)}

      renderInput={(params) => (
        <TextField
          sx={{
            '& .MuiInputBase-root': {
              borderRadius: '10px'
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#C4C4C4',
                borderWidth: 3
              }
            }
          }}
          {...params}
          value={value}
          disabled={!ready}
          label="Место, адрес"
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
          onChange={handleInput}
        />
      )}
    />
  )
}

export default AutoComplete