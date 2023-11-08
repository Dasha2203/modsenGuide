import { Box, Typography } from '@mui/material'

const NotFound = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography variant="h1">404</Typography>
    </Box>
  )
}

export default NotFound