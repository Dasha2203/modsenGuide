import { useMemo } from 'react'
import { placesTypes } from '@consts'

import { Wrap } from './styles'
import { TTypeListProps } from './types'

const TypesList = ({ types }: TTypeListProps) => {
  
  const list = useMemo(() => (
    types.map(item => (
      placesTypes.find(placeType => placeType.type === item) ?
        <img
          key={item}
          src={placesTypes.find(placeType => placeType.type === item)?.src}
          alt={item} 
        />
        : null
    ))
  ), [types])

  return (
    <Wrap>
      {list}
    </Wrap>
  )
}

export default TypesList