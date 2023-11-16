import { LinkProps as MuiLinkProps, Link as MuiLink } from '@mui/material'
import { LinkProps, Link as ReactRouterLink } from 'react-router-dom'

type Props = LinkProps & MuiLinkProps

const Link = (props: Props) => {
  return (
    <MuiLink {...props} component={ReactRouterLink}/>
  )
}

export default Link