export type TItemPlace = {
  id: string | number
  src: string
  text: string
}

export type TPlaceListItemProps = {
  item: TItemPlace
  isActive: boolean
}