import { List } from '@mui/material';
import { styled } from '@mui/material/styles'

export const StyledList = styled(List)(({ theme }) => ({
  flexGrow: '1',
  borderWidth: '3px',
  borderColor: '#C4C4C4',
  borderStyle: 'solid',
  borderRadius: '10px',
  maxHeight: '490px',
  overflowY: 'auto',

  [theme.breakpoints.down('lg')]: {
  }
}),
);