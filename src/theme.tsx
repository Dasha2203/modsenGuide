import { createTheme, responsiveFontSizes } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: "Mont"
  },
  palette: {
    primary: {
      main: '#5E7BC7'
    },
    secondary: {
      main: '#C75E5E'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          fontWeight: 700
        },
      }
    }
  }
})

export default responsiveFontSizes(theme)