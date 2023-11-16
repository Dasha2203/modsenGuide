import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

export const StyledBox = styled(Box)(() => ({
  position: 'absolute',
  top: '20px',
  left: '20px',
  zIndex: '1000',
  // transform: 'translateX(-50%)',
  padding: '19px 20px 24px',
  width: '100%',
  maxWidth: '414px',
  borderRadius: '10px',
  backgroundColor: '#FFFFFF'
}))

export const Row = styled(Box)(() => ({
  display: 'flex',
  gap: '57px'
}))

export const Property = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px'
}))

export const Value = styled(Typography)(() => ({
  fontSize: '24px',
  fontWeight: 800,
  color: '#405F7B'
}))

export const Label = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 600,
  color: '#405F7B'
}))