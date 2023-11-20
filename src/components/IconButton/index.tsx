import { IconButtonProps, SimplePaletteColorOptions } from '@mui/material'

import { StyledIconButton } from './style'

type Props = IconButtonProps & {
  active?: boolean
  typeColor?: 'dark' | 'light' | 'main'
}

const IconButton = ({ children, active, typeColor, ...props }: Props) => {
  return (
    <StyledIconButton active={active} typeColor={typeColor} {...props}>
      {children}
    </StyledIconButton>
  )
}

export default IconButton