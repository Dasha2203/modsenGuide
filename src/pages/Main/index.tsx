import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

import useAuth from 'hooks/use-auth'
import Drawer from 'components/Drawer'

const StyledBox = styled(Box)(({theme}) => ({
  backgroundColor: 'red',
  [theme.breakpoints.up('sm')]: {
    backgroundColor: 'blue',
  }
}))

export const Main = () => {
  const { email } = useAuth()

  return (
    <StyledBox>
      <Drawer/>
    </StyledBox>
  )
}

export default Main