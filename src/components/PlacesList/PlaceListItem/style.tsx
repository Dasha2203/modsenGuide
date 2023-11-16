import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material'

export const Item = styled(Box, 
  {shouldForwardProp: (prop) => prop !== "lowerCase" && prop !== "active"}
)<{ active?: boolean }>(({theme, active}) => ({
  display: 'grid',
  gridTemplateColumns: '30px auto',
  alignItems: 'center',
  gap: '20px',
  opacity: active ? '1' : '0.5'

}))


export const ItemText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 700
}),
)