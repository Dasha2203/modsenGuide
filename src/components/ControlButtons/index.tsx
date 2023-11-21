import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import LocationIcon from 'icons/LocationIcon'
import MinusIcon from 'icons/MinusIcon'
import PlusIcon from 'icons/PlusIcon'
import { setZoom } from 'store/slices/places/placesSlice'
import CombineButtons from 'ui/CombineButtons'
import IconButton from 'ui/IconButton'

import { WrapButtons } from './style'

const ControlButtons = () => {
  const { map, zoom } = useAppSelector(state => state.placesReducer)
  const { userLocation } = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()

  if (!map) return null

  return (
    <WrapButtons>
      {userLocation && <IconButton onClick={() => map.panTo(userLocation)}>
        <LocationIcon />
      </IconButton>}
      {map.getZoom() && (
        <CombineButtons>
          <IconButton onClick={() => dispatch(setZoom(zoom + 1))}>
            <PlusIcon />
          </IconButton>
          <IconButton onClick={() => dispatch(setZoom(zoom - 1))}>
            <MinusIcon />
          </IconButton>
        </CombineButtons>
      )}
    </WrapButtons>
  )
}

export default ControlButtons