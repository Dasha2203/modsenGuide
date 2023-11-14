import { Item, ItemText } from './style'

type TItem = {
  id: string | number
  src: string
  text: string
}

type ItemProps = {
  item: TItem
  isActive: boolean
}

const PlaceListItem = ({ item, isActive }: ItemProps) => {
  const { id, src, text } = item
  return (
    <Item key={id} isActive={isActive}>
      <img src={src} />
      <ItemText>{text}</ItemText>
    </Item>
  )
}

export default PlaceListItem