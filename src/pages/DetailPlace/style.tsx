import { Box, Card as MuiCard, CardActions as MuiCardActions, CardMedia, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'


export const Wrap = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%'
}))

export const Card = styled(MuiCard)(() => ({
  padding: '20px 20px 35px',
  maxWidth: '400px',
  // width: '100%',
  borderRadius: '10px',
  border: '3px',
  borderStyle: 'solid',
  boxShadow: 'none',
  borderColor: '#C4C4C4'
}))

export const CardImage = styled(CardMedia)(() => ({
  borderRadius: '10px'
}))

export const TitleCard = styled(Typography)(() => ({
  fontWeight: '800',
  fontSize: '24px',
  whiteSpace: 'normal'
}))

export const TextCard = styled(Typography)(() => ({
  fontWeight: '400',
  fontSize: '12px',
  whiteSpace: 'normal'
}))

export const CardActions = styled(MuiCardActions)(() => ({
  justifyContent: 'space-between'
}))