import sportIcon from 'icons/places/sport.svg'
import coffeIcon from 'icons/places/coffee.svg'
import { PlacesTypes } from 'models/IPlace'

export type PlaceTypeItem = {
  id: string
  src: string
  text: string
  type: PlacesTypes
}

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
