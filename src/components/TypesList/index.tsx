import { placesTypes } from 'consts'

import { Wrap } from './style'
import { TTypeListProps } from './types'

const TypesList = ({ types }: TTypeListProps) => {

  return (
    <Wrap>
      {types.map(item => (
        placesTypes.find(placeType => placeType.type === item) ?
          <img key={item} src={placesTypes.find(placeType => placeType.type === item)?.src} alt={item} />
          : null
      ))}
    </Wrap>
  )
}

export default TypesList