import { StyledButton } from './style'
import { TButtonProps } from './types'

const Button = ({ children, ...props }: TButtonProps) => {
  return (
    <StyledButton
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button