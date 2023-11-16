import { setZoom } from "store/slices/places/placesSlice"
import { useAppDispatch, useAppSelector } from "hooks/redux-hooks"
import IconButton from "components/IconButton"
import CombineButtons from "components/CombineButtons"
import { WrapButtons } from "./style"
import LocationIcon from "icons/LocationIcon"
import PlusIcon from "icons/PlusIcon"
import MinusIcon from "icons/MinusIcon"

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
      {map.getZoom()}
      {
        map.getZoom() && (
          <CombineButtons>
            <IconButton onClick={() => dispatch(setZoom(zoom + 1))}>
              <PlusIcon />
            </IconButton>
            <IconButton onClick={() => dispatch(setZoom(zoom - 1))}>
              <MinusIcon />
            </IconButton>
          </CombineButtons>
        )
      }

    </WrapButtons>
  )
}

export default ControlButtons