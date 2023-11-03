import { Autocomplete, Drawer, TextField } from "@mui/material"

import Box from '@mui/material/Box';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import { useEffect, useState } from "react";
import PlacesFilter from "../PlacesFilter";

const drawerWidth = 510;
type LatLngLiteral = google.maps.LatLngLiteral

const Aside = ({ isLoaded }: { isLoaded: boolean }) => {
  // const [center, setCenter] = useState<LatLngLiteral>({
  //   lat: 53.7782184, lng: 27.6096278
  // })

  const {
    ready,
    value,
    init,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
    },
    debounce: 300,
  });


  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSelect = (value: string) => {
    setValue(value, false);
    clearSuggestions();


    getGeocode({ address: value }).then((results) => {
      const { lat, lng } = getLatLng(results[0]);
      console.log("📍 Coordinates: ", { lat, lng });
    });
  };


  function getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          // setCenter({ ...pos })
          console.log('center: ', pos)
          // infoWindow.setPosition(pos);
          // infoWindow.setContent("Location found.");
          // infoWindow.open(map);
          // map.setCenter(pos);
        },
        () => {
          // handleLocationError(true, infoWindow, map.getCenter()!);
        }
      );
    } else {
      // Browser doesn't support Geolocation
      // handleLocationError(false, infoWindow, map.getCenter()!);
    }
  }

  // const renderSuggestions = () =>
  //   data.map((suggestion) => {
  //     const {
  //       place_id,
  //       structured_formatting: { main_text, secondary_text },
  //     } = suggestion;

  //     return (
  //       <ListItem key={place_id} onClick={handleSelect(suggestion.description)}>
  //         <strong>{main_text}</strong> <small>{secondary_text}</small>
  //       </ListItem>
  //     );
  //   });


  var request = {
    query: 'Museum of Contemporary Art Australia',
    fields: ['name', 'geometry'],
  };



  useEffect(() => {
    if (isLoaded) {
      init()
      getPosition()
    }
  }, [isLoaded, init])

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          display: 'flex',
          flexDirection: 'row',
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          px: '25px',
          pt: '30px',
          pb: '35px'
        }}
      >

      </Box>
      <Box sx={{ p: '25px', flexGrow: 1 }}>

        <Autocomplete
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
        <PlacesFilter />
      </Box>
    </Drawer>
  )
}

export default Aside