import { LinkProps } from 'react-router-dom'
import { LinkProps as MuiLinkProps } from '@mui/material'
import { StyledLink } from './style'

type Props = LinkProps & MuiLinkProps & {}

const SectionLink = (props: Props) => {
  return (
    <StyledLink {...props}/>
  )
}

export default SectionLink