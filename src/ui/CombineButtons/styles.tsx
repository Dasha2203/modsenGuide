import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const Wrap = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: '#FFFFFF',
  borderRadius: '6px',
  borderWidth: '3px',
  borderStyle: 'solid',
  borderColor: 'rgba(0, 0, 0, .2)',
  '& > .MuiIconButton-root': {
    position: 'relative',
    borderWidth: 0,
    borderColor: 'transparent'
  },
  '& > *:not(:last-child)::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    right: '-1px',
    transform: 'translateY(-50%)',
    width: '3px',
    height: '70%',
    borderRadius: '2px',
    backgroundColor: 'rgba(0, 0, 0, .1)'

  }
}))