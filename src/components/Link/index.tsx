import { Link as MuiLink,LinkProps as MuiLinkProps } from '@mui/material'
import { Link as ReactRouterLink,LinkProps } from 'react-router-dom'

type Props = LinkProps & MuiLinkProps

const Link = (props: Props) => {
  return (
    <MuiLink {...props} component={ReactRouterLink}/>
  )
}

export default Link