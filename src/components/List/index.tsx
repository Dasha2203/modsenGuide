import React from 'react'
import { ListItem } from '@mui/material'

import { StyledList } from './style'
import { StyledListButton } from './ListItem/style'

type ListProps<A> = {
  onChange: (value: A) => void
  checked: A[]
  itemAs: (option: A) => React.ReactNode
  items: A[]
}

const List = <A extends unknown>({ items, itemAs, checked, onChange }: ListProps<A>) => {

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
              {/* {itemAs(checked)} */}
            </StyledListButton>
          </ListItem>
        )
      })}
    </StyledList>
  )
}

export default List