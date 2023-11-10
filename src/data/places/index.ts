import sportIcon from 'icons/places/sport.svg'
import coffeIcon from 'icons/places/coffee.svg'

export type PlaceItem = {
  id: string
  src: string
  text: string
}

export const places:PlaceItem[] = [
  {
    id: '1',
    src: sportIcon,
    text: 'Спорт'
  },
  {
    id: '2',
    src: coffeIcon,
    text: 'Кофе/чай'
  }
]