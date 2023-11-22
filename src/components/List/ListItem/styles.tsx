import { ListItemButton, styled } from '@mui/material'

export const StyledListButton = styled(ListItemButton)(({ theme }) => ({
  padding: '10px 20px',
  '@media (max-width: 600px)': {
    padding: '5px 10px',
  },
}))