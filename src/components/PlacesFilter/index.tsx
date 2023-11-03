import axios from 'axios';
import { useEffect, useState } from 'react';

enum Places {
  Cafe = 'cafe',
  Store = 'store'
}

const PlacesFilter = () => {
  const [places, setPlaces] = useState([])

  // useEffect(() => {
  //   axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+minsk+belarus&key=AIzaSyAgm2uZv80FkdUgbawVxxCGaSel8R7A6tI`)
  //     .then(res => {
  //       const persons = res.data;
  //       setPlaces(persons);
  //     })
  // }, [])

  return (
    <div>

    </div>
  )
}

export default PlacesFilter