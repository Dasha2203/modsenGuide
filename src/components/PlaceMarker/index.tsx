import { memo } from 'react'
import { placesTypes } from '@consts'
import { Marker } from '@react-google-maps/api'

import { TPlaceMarkProps } from './types'

const PlaceMarker = ({placeId, position, types, handleClick}: TPlaceMarkProps) => {

  return (
    <Marker
      position={position}
      icon={{ 
        url: placesTypes.find(({ type }) => types?.find(item => item === type))?.src!, 
        scaledSize: new google.maps.Size(30, 30) 
      }}
      onClick={() => handleClick(placeId!)}
    />
  )
}

export default memo(PlaceMarker)