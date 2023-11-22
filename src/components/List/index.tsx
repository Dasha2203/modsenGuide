import ListItem from './ListItem'
import { StyledList } from './styles'
import { TListProps } from './types'

const List = <A extends unknown>({ items, itemAs, checked, onChange }: TListProps<A>) => {

  return (
    <StyledList dense>
      {items.map((item, i) => {
        return (
          <ListItem
            key={i}
            children={itemAs(item)}
            onChange={() => onChange(item)}
          />
        )
      })}
    </StyledList>
  )
}

export default List