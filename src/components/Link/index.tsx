import { LinkProps, Link as MuiLink } from '@mui/material'
import { FC } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

const Link:FC<LinkProps> = (props) => {
  return (
    <MuiLink {...props} component={ReactRouterLink} to={props.href ?? "#"}/>
  )
}

export default Link