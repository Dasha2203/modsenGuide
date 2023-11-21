import { Box, Card as MuiCard, CardMedia, styled, Typography } from '@mui/material'

export const Card = styled(MuiCard)(({ theme }) => ({
  padding: '20px 30px 23px 20px',
  borderWidth: '3px',
  borderColor: '#C4C4C4',
  borderRadius: '10px',
  borderStyle: 'solid',
  boxShadow: 'none',
  [theme.breakpoints.down('md')]: {
    maxWidth: 'none'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '10px',
  },
}))

export const CardHeader = styled(Box)(({ theme }) => ({
  marginBottom: '20px',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',

  [theme.breakpoints.down('sm')]: {
    marginBottom: '10px',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '5px'
  },
}))

export const CardFooter = styled(Box)(({ theme }) => ({
  marginTop: '20px',
  display: 'grid',
  justifyContent: 'space-between',
  gridTemplateColumns: '20px 20px',

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '15px 15px',
  }
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

