import { ListItem } from '@mui/material'

import { StyledList, StyledListButton } from './styles'
import { TListProps } from './types'

const List = <A extends unknown>({ items, itemAs, checked, onChange }: TListProps<A>) => {

  return (
    <StyledList dense>
      {items.map((item, i) => {
        return (
          <ListItem
            key={i}
            sx={{ padding: 0 }}
          >
            <StyledListButton onClick={() => onChange(item)}>
              {itemAs(item)}
            </StyledListButton>
          </ListItem>
        )
      })}
    </StyledList>
  )
}

export default List