import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const WrapButtons = styled(Box)(() => ({
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  display: 'flex',
  gap: '20px',
  zIndex: '1000'
}))