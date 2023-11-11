import { ListItemButton } from '@mui/material'
import styled from '@emotion/styled/macro'

type ButtonProps = {
  active: boolean
}

export const StyledListButton = styled(ListItemButton)(() => ({
  padding: '10px 20px',
  // opacity: props.active ? '1' : '0.5'
}))