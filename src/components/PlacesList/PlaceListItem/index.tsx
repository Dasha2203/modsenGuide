import { Grid } from '@mui/material'

import { ItemImg, ItemText,Row } from './style'

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
    <Row container key={id} active={isActive}>
      <ItemImg item>
        <img src={src} alt={item.text}/>
      </ItemImg>
      <Grid item>
      <ItemText>{text}</ItemText>
      </Grid>
    </Row>
  )
}

export default PlaceListItem