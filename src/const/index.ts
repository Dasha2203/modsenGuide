import coffeIcon from 'icons/places/coffee.svg'
import sportIcon from 'icons/places/sport.svg'
import { PlacesTypes } from 'models/IPlace'
import { PlaceTypeItem } from 'types/placeTypeItem'

export const placesTypes: PlaceTypeItem[] = [
  {
    id: '1',
    src: sportIcon,
    text: 'Спорт',
    type: PlacesTypes.Sport
  },
  {
    id: '2',
    src: coffeIcon,
    text: 'Кофе/Чай',
    type: PlacesTypes.Cafe
  }
]