import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const MapContainer = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })<{open?: boolean}>(
  ({ theme, open }) => ({
    marginLeft: 'auto', 
    height: '100vh', 
    background: 'green', 
    position: 'relative',
    ...(open && {
      width: 'calc(100% - 600px)'
    }),
    ...(!open && {
      width: 'calc(100% - 110px)'
    }),
    [theme.breakpoints.down('md')]: {
      ...(!open && {
        width: 'calc(100% - 70px)'
      }),
    },
  }),
);