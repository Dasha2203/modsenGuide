import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Circle, DirectionsRenderer, GoogleMap, Marker } from '@react-google-maps/api'
import { Box } from '@mui/material'

import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import { setUserLocation } from 'store/slices/user/userSlice'
import { setMap } from 'store/slices/places/placesSlice'
import InfoPanel from 'components/InfoPanel'
import ControlButtons from 'components/ControlButtons'
import locationImg from 'icons/location.svg'

const Map = ({ isLoaded }: { isLoaded: boolean }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { places, direction, zoom } = useAppSelector((state) => state.placesReducer)
  const { userLocation } = useAppSelector((state) => state.userReducer)

  useEffect(() => {
    getPosition()
  }, [])

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    // const bounds = new window.google.maps.LatLngBounds(userLocation);
    // map.fitBounds(bounds);

    dispatch(setMap(map))
  }, [userLocation])

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    dispatch(setMap(null))
  }, [])

  function getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const pos = { lat: position.coords.latitude, lng: position.coords.longitude }

          dispatch(setUserLocation(pos))

        },
        () => {
          console.log('Ошибка получения местоположения')
        }
      );
    } else {
      console.log('Нет доступа к геолокации')
    }
  }

  return (
    <Box sx={{ width: 'calc(100% - 600px)', ml: 'auto', height: '100vh', background: 'green', position: 'relative' }}>
      {direction && (
        <InfoPanel items={[
          { label: 'Дистанция', value: direction.routes[0].legs[0].distance?.text },
          { label: 'Примерное время', value: direction.routes[0].legs[0].duration?.text },
        ]}
        />
      )}
      <ControlButtons/>
      {isLoaded && userLocation ? (
        <GoogleMap
          center={userLocation}
          onLoad={onLoad}
          zoom={zoom}
          onUnmount={onUnmount}
          mapContainerClassName="map"
          options={{
            minZoom: 4,
            maxZoom: 18,
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false
          }}
        >
          {direction && (
            <DirectionsRenderer
              directions={direction}
              options={{
                polylineOptions: {
                  strokeColor: '#5E7BC7',
                  strokeWeight: 10
                }
              }}
            />
          )}
          {places.filter(place => !!place.geometry?.location).map(place => {
            return (
              <Marker
                key={place.place_id}
                position={place.geometry?.location!}
                onClick={() => navigate(`/place/${place.place_id}`)}
              />
            )

          })}
          <Marker position={userLocation} icon={{url: locationImg}}/>
          <Circle
            center={userLocation}
            radius={10000}
            options={{
              fillColor: '#5E7CC7',
              fillOpacity: 0.1,
              strokeColor: '#5E7CC7',
              strokeOpacity: 0.2
            }}
          />
          <Circle
            center={userLocation}
            radius={1000}
            options={{
              fillColor: '#5E7CC7',
              fillOpacity: 0.2,
              strokeWeight: 0,
            }}
          />
        </GoogleMap>
      ) : null}
    </Box >
  )
}

export default Map