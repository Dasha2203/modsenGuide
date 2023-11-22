import { memo } from 'react'
import { ListItem as MuiListItem } from '@mui/material'

import { StyledListButton } from './styles'
import { TListItemProps } from './types'

const ListItem = ({ children, onChange }: TListItemProps) => {

  return (
    <MuiListItem
      sx={{ padding: 0 }}
    >
      <StyledListButton onClick={onChange}>
        {children}
      </StyledListButton>
    </MuiListItem>
  )
}

export default memo(ListItem)