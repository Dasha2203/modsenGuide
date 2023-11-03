import './App.css'
import { useJsApiLoader } from '@react-google-maps/api'
import Map from './components/Map';
import AutoComplete from './components/AutoComplete';
import Aside from './components/Aside';

const App = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: 'AIzaSyAgm2uZv80FkdUgbawVxxCGaSel8R7A6tI',
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="">
      <Aside isLoaded={isLoaded} />
      <AutoComplete isLoaded={isLoaded} />
      <Map />
    </div>);
}

export default App;
