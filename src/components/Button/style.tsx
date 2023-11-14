import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const StyledButton = styled(Button)(() => ({
  textTransform: 'none',
  borderRadius: '5px',
  '&:hover': {
    boxShadow: 'none'
  },
  '& .MuiButton-startIcon': {
    height: '20px'
  },
  '&.MuiButton-contained': {
    outline: '3px solid transparent',
    transition: 'all .3s ease',

    '&:hover': {
      outlineColor: '#C4C4C4'
    },
    '&:active': {
      outlineColor: '#808080',
      boxShadow: 'none'
    }
  },
  '&.MuiButton-sizeSmall': {
    fontSize: '14px'
  },
  '&.MuiButton-containedPrimary': {
    '&:hover': {
      backgroundColor: '#5E7BC7'
    }
  }
}))