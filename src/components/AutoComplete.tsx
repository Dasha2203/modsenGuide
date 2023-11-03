import { useEffect } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

const AutoComplete = ({isLoaded}: {isLoaded: boolean}) => {
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

  const handleSelect = (value: string) =>
    () => {
      setValue(value, false);
      clearSuggestions();

      getGeocode({ address: value }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("📍 Coordinates: ", { lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion.description)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

    useEffect(() => {
      if (isLoaded) {
        init()
      }
    },[isLoaded, init])

    return (
      <div style={{
        position: 'fixed',
        zIndex: 100,
        top: 10,
        left: 10
      }}>
        <input
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Where are you going?"
        />
        {/* We can use the "status" to decide whether we should display the dropdown or not */}
        {status === "OK" && <ul style={{position: 'fixed', zIndex: 100, left: 10, top: 30}}>{renderSuggestions()}</ul>}
      </div>
    )

}

export default AutoComplete