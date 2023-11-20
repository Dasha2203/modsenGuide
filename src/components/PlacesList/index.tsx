import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import { checkTypePlaces } from 'store/slices/places/placesSlice'

import List from 'components/List'

import PlaceListItem from './PlaceListItem'

const PlacesList = () => {
  const { checkedTypesPlaces, typesPlaces } = useAppSelector(state => state.placesReducer)
  const dispatch = useAppDispatch()

  return (
    <List
      onChange={(item) => dispatch(checkTypePlaces(item))}
      items={typesPlaces}
      itemAs={(item) => (
        <PlaceListItem
          item={item}
          isActive={checkedTypesPlaces.findIndex(i => i.id === item.id) !== -1}
        />
      )}
      checked={checkedTypesPlaces}
    />
  )
}

export default PlacesList