import { Link as ReactRouterLink,LinkProps } from 'react-router-dom'
import { Link as MuiLink,LinkProps as MuiLinkProps } from '@mui/material'

type Props = LinkProps & MuiLinkProps

const Link = (props: Props) => {
  return (
    <MuiLink {...props} component={ReactRouterLink}/>
  )
}

export default Link