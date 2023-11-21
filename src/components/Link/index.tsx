import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material'

import { TLinkProps } from './types'

const Link = (props: TLinkProps) => {
  return (
    <MuiLink {...props} component={ReactRouterLink}/>
  )
}

export default Link