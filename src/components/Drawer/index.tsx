import { useState } from 'react'
import { Box } from '@mui/material'

import Navbar from './Navbar';
import SearchBar from './SearchBar'
import { StyledDrawer } from './style';

export const Drawer = ({ isLoaded }: { isLoaded: boolean }) => {
  const [open, setOpen] = useState(false)

  return (
    <StyledDrawer variant="permanent" open={true}>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'stretch', height: '100%' }}>
        <Navbar />
        {isLoaded && <SearchBar />}
      </Box>
    </StyledDrawer>
  )
}

export default Drawer