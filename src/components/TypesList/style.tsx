import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const Wrap = styled(Box)(() => ({
  display: 'flex',
  gap: '5px',

  '& img': {
    width: '30px',
    height: '30x',
    borderRadius: '50%'
  }
}))