import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import locationImg from '@assets/icons/location.svg'
import ControlButtons from '@components/ControlButtons'
import InfoPanel from '@components/InfoPanel'
import { placesTypes } from '@consts'
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks'
import { Circle, DirectionsRenderer, GoogleMap, Marker } from '@react-google-maps/api'
import { setOpenSearchBar } from '@store/slices/app/appSlice'
import { setMap } from '@store/slices/places/placesSlice'
import { setUserLocation } from '@store/slices/user/userSlice'

import { MapContainer } from './styles'
import { TMapProps } from './types'

const Map = ({ isLoaded }: TMapProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { places, direction, zoom, radius } = useAppSelector((state) => state.placesReducer)
  const { openSearchBar } = useAppSelector((state) => state.appReducer)
  const { userLocation } = useAppSelector((state) => state.userReducer)

  useEffect(() => {
    getPosition()
  }, [])

  const onLoad = useCallback(function callback(map: google.maps.Map) {
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
  function handleMarkerClick(id: string) {
    dispatch(setOpenSearchBar(true))
    navigate(`/place/${id}`)
  }

  return (
    <MapContainer open={openSearchBar}>
      {direction && (
        <InfoPanel items={[
          { label: 'Дистанция', value: direction.routes[0].legs[0].distance?.text },
          { label: 'Примерное время', value: direction.routes[0].legs[0].duration?.text },
        ]}
        />
      )}
      <ControlButtons />
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
            fullscreenControl: false,
            mapId: "c8ee2cd9c357dc67"
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
          {places.filter(place => !!place.geometry?.location).map(({ place_id, geometry, types }) => {
            return (
              <Marker
                key={place_id}
                position={geometry?.location!}
                icon={{ url: placesTypes.find(({ type }) => types?.find(item => item === type))?.src!, scaledSize: new google.maps.Size(30, 30) }}
                onClick={() => handleMarkerClick(place_id!)}
              />
            )

          })}
          <Marker position={userLocation} icon={{ url: locationImg}}/>
          <Circle
            center={userLocation}
            radius={radius}
            options={{
              fillColor: '#5E7CC7',
              fillOpacity: 0.1,
              strokeColor: '#5E7CC7',
              strokeOpacity: 0.2
            }}
          />
        </GoogleMap>
      ) : null}
    </MapContainer>
  )
}

export default Map

