import bankIcon from 'assets/icons/places/bank.svg'
import coffeIcon from 'assets/icons/places/coffee.svg'
import parkIcon from 'assets/icons/places/nature.svg'
import sportIcon from 'assets/icons/places/sport.svg'
import storeIcon from 'assets/icons/places/store.svg'
import { PlaceTypeItem } from 'types/placeTypeItem'

export enum PlacesTypesEnum {
  Restaurant = 'restaurant',
  Food = 'food',
  Establishment = 'establishment',
  MealTakeAway = 'meal_takeaway',
  PointOfInterest = 'point_of_interest',
  Cafe = 'cafe',
  Sport = 'gym',
  Bank = 'bank',
  Store = 'supermarket',
  Park = 'park',
}

export const placesTypes: PlaceTypeItem[] = [
  {
    id: '1',
    src: sportIcon,
    text: 'Спорт',
    type: PlacesTypesEnum.Sport
  },
  {
    id: '2',
    src: coffeIcon,
    text: 'Кофе/Чай',
    type: PlacesTypesEnum.Cafe
  },
  {
    id: '3',
    src: bankIcon,
    text: 'Банки',
    type: PlacesTypesEnum.Bank
  },
  {
    id: '4',
    src: storeIcon,
    text: 'Туристическая инфраструктура - магазины',
    type: PlacesTypesEnum.Store
  },
  {
    id: '5',
    src: parkIcon,
    text: 'Природа',
    type: PlacesTypesEnum.Park
  },

]

export enum RoutesEnum {
  main = '/',
  login = '/login',
  register = '/register',
  detailPlace =  '/place/:id',
  favorites = '/favorites',
  notFound = '*'
}

//Regex for checking email
export const RegexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
//Regex for checking password
export const RegexPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g

