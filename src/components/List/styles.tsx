import styled from '@emotion/styled/macro'
import { List, ListItemButton } from '@mui/material'

export const StyledList = styled(List)(({ theme }) => ({
  borderWidth: '3px',
  borderColor: '#C4C4C4',
  borderStyle: 'solid',
  borderRadius: '10px',
  maxHeight: '490px',
  overflowY: 'auto',
}),
);

