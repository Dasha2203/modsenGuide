import { Box, Card as MuiCard, CardMedia, styled,Typography } from '@mui/material'

export const Card = styled(MuiCard)(() => ({
  padding: '20px 30px 23px 20px',
  maxWidth: '310px',
  borderWidth: '3px',
  borderColor: '#C4C4C4',
  borderRadius: '10px',
  borderStyle: 'solid',
  boxShadow: 'none'
}))

export const CardHeader = styled(Box)(() => ({
  marginBottom: '20px',
  display: 'flex',
  alignItems: 'center',
  gap: '20px'
}))

export const CardFooter = styled(Box)(() => ({
  marginTop: '20px',
  display: 'grid',
  justifyContent: 'space-between',
  gridTemplateColumns: '20px 20px'
}))

export const CardImage = styled(CardMedia)(() => ({
  borderRadius: '10px',
  maxWidth: '120px',
  height: '90px',
  width: '100%'
}))

export const CardTitle = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 800,
  whiteSpace: 'normal'
}))

export const CardText = styled(Typography)(() => ({
  marginTop: '10px',
  fontSize: '10px',
  whiteSpace: 'normal'
}))

