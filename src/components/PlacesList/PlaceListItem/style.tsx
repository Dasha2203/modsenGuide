import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Item = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '30px auto',
  alignItems: 'center',
  gap: '20px'
}),
);

export const ItemText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 700
}),
);