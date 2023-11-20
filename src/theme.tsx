import { createTheme, responsiveFontSizes } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: "Mont"
  },
  palette: {
    primary: {
      main: '#5E7BC7',
    },
    secondary: {
      main: '#C75E5E',
      dark: '#808080'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          fontWeight: 700,
          padding: '10px',
          boxShadow: 'none'
        },
        sizeLarge: {
          padding: '19px'
        },
        outlined: {
          borderWidth: '3px',
          '&:hover': {
            borderWidth: '3px'
          }
        }
      },
    }
  }
})

export default responsiveFontSizes(theme)