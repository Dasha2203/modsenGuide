import { Box, Button as MuiButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import Search from 'icons/SearchIcon';

export const WrapSearchBar = styled(Box)(({ theme }) => ({
  padding: '25px 25px 0',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '1',
  borderLeftWidth: '3px',
  borderLeftColor: '#C4C4C4',
  borderLeftStyle: 'solid',
}),
);

export const SearchIcon = styled(Search)(({ theme }) => ({
  width: '22px',
  height: '22px',
  fill: 'white',
  marginTop: 'auto'
}),
);