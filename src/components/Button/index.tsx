import { ButtonProps } from '@mui/material'
import { StyledButton } from './style'

type Props = ButtonProps & {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick: () => void
}

const Button = ({ children, ...props }: Props) => {
  return (
    <StyledButton
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button