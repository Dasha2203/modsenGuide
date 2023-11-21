import { Box, Card as MuiCard, CardContent as MuiContent, CardMedia, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'


export const Wrap = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%'
}))

export const Card = styled(MuiCard)(({ theme }) => ({
  padding: '20px 20px 35px',
  maxWidth: '400px',
  // width: '100%',
  borderRadius: '10px',
  border: '3px',
  borderStyle: 'solid',
  boxShadow: 'none',
  borderColor: '#C4C4C4',

  [theme.breakpoints.down('md')]: {
    padding: '10px',
  },
}))

export const CardImage = styled(CardMedia)(() => ({
  borderRadius: '10px'
}))

export const CardContent = styled(MuiContent)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    padding: '10px 0',
  },
}))

export const TitleCard = styled(Typography)(({ theme }) => ({
  fontWeight: '800',
  fontSize: '24px',
  whiteSpace: 'normal',
  [theme.breakpoints.down('md')]: {
    marginTop: '10px'
  },
}))

export const TextCard = styled(Typography)(() => ({
  fontWeight: '400',
  fontSize: '12px',
  whiteSpace: 'normal'
}))

export const CardActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '15px'
  },
}))