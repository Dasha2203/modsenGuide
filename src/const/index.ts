import bankIcon from 'assets/icons/places/bank.svg'
import coffeIcon from 'assets/icons/places/coffee.svg'
import parkIcon from 'assets/icons/places/nature.svg'
import sportIcon from 'assets/icons/places/sport.svg'
import storeIcon from 'assets/icons/places/store.svg'
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
  },
  {
    id: '3',
    src: bankIcon,
    text: 'Банки',
    type: PlacesTypes.Bank
  },
  {
    id: '4',
    src: storeIcon,
    text: 'Туристическая инфраструктура - магазины',
    type: PlacesTypes.Store
  },
  {
    id: '5',
    src: parkIcon,
    text: 'Природа',
    type: PlacesTypes.Park
  },

]