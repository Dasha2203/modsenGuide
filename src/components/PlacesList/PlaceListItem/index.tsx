import { Item, ItemText } from './style'

type TItem = {
  id: string | number
  src: string
  text: string
}

type ItemProps = {
  item: TItem
}

const PlaceListItem = ({ item }: ItemProps) => {
  const { id, src, text } = item
  return (
    <Item key={id}>
      <img src={src} />
      <ItemText>{text}</ItemText>
    </Item>
  )
}

export default PlaceListItem