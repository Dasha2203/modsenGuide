import { placesTypes } from 'consts'

import { Wrap } from './style'

type Props = {
  types: string[]
}

const TypesList = ({ types }: Props) => {
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