import { Grid } from '@mui/material'

import { ItemImg, ItemText,Row } from './styles'
import { TPlaceListItemProps } from './types'

const PlaceListItem = ({ item, isActive }: TPlaceListItemProps) => {
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