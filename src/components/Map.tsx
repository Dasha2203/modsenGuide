import { Circle, GoogleMap, Marker } from '@react-google-maps/api'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type LatLngLiteral = google.maps.LatLngLiteral
type MapOptions = google.maps.MapOptions

const Map = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [places, setPlaces] = useState<google.maps.places.PlaceResult[]|null>(null)
  const [center, setCenter] = useState<LatLngLiteral>({
    lat: 53.7782184, lng: 27.6096278
  })

  const options = useMemo<MapOptions>(() => ({
    disableDefaultUI: true,
    clickableIcons: false
  }), [])

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds();
    setMap(map);
  }, []);

  function getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCenter({ ...pos })
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

  function getPlaces() {
    if (!map) return

    var request = {
      location: { lat: 53.7782184, lng: 27.6096278 },
      radius: 5000,
      type: 'school'
  };
  // let places;

    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results: google.maps.places.PlaceResult[] | null, status) => {   
      // places = results;
      setPlaces(results)
      console.log('status', status);
      console.log('places', places);});
  }

 



  useEffect(() => {
    getPosition()
  }, [])
  useEffect(() => {
    if (!map) return
    getPlaces()
  }, [map])


  return (
    <div className="">
      <GoogleMap
        zoom={6}
        center={center}
        mapContainerClassName="map-container"
        options={options}
        onLoad={onLoad}
      >
        <Marker position={center}/>
        {places && (
          places.filter(item => item.geometry && item.geometry.location).map(place => (
            <Marker key={place.id} position={place.geometry!.location!} icon={place.icon} />
          ))
        )}
        <Circle
          center={center}
          radius={5000}
          options={{
            strokeOpacity: 0.2,
            strokeWeight: 0,
            clickable: false,
            draggable: false,
            editable: false,
            visible: true,
            zIndex: 3,
            fillOpacity: 0.2,
            strokeColor: '#5E7BC7',
            fillColor: '#5E7BC7'
          }}
        />
        <Circle
          center={center}
          radius={1000}
          options={{
            strokeOpacity: 0.1,
            strokeWeight: 0,
            clickable: false,
            draggable: false,
            editable: false,
            visible: true,
            zIndex: 3,
            fillOpacity: 0.1,
            strokeColor: '#5E7BC7',
            fillColor: '#5E7BC7'
          }}
        />
      </GoogleMap>
    </div>

  )
}

export default Map