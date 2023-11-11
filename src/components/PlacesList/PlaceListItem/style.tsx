import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Item = styled(Box)((props: { isActive: boolean }) => ({
  display: 'grid',
  gridTemplateColumns: '30px auto',
  alignItems: 'center',
  gap: '20px',
  opacity: props.isActive ? '1' : '0.5'
}),
);

export const ItemText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 700
}),
);