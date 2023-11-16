import { List, ListItemButton } from '@mui/material'
import styled from '@emotion/styled/macro'

export const StyledList = styled(List)(({ theme }) => ({
  borderWidth: '3px',
  borderColor: '#C4C4C4',
  borderStyle: 'solid',
  borderRadius: '10px',
  maxHeight: '490px',
  overflowY: 'auto',
}),
);

export const StyledListButton = styled(ListItemButton)(() => ({
  padding: '10px 20px',
  // opacity: props.active ? '1' : '0.5'
}))