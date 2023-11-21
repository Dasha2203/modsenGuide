import { StyledIconButton } from './styles'
import { TIconButtonProps } from './types'

const IconButton = ({ children, active, typeColor, ...props }: TIconButtonProps) => {
  return (
    <StyledIconButton active={active} typeColor={typeColor} {...props}>
      {children}
    </StyledIconButton>
  )
}

export default IconButton