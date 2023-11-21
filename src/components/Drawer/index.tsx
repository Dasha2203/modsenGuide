import { Box } from '@mui/material'
import { useAppSelector } from 'hooks/redux-hooks'

import Navbar from './Navbar'
import SearchBar from './SearchBar'
import { StyledDrawer } from './style'
import { TDrawerProps } from './types'

export const Drawer = ({ isLoaded }: TDrawerProps) => {
  const { openSearchBar } = useAppSelector(state => state.appReducer)

  return (
    <StyledDrawer variant="permanent" open={openSearchBar}>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'stretch', height: '100%' }}>
        <Navbar />
        {isLoaded && <SearchBar />}
      </Box>
    </StyledDrawer>
  )
}

export default Drawer