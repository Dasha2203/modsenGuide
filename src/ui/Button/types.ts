import { ButtonProps } from '@mui/material'

export type TButtonProps = ButtonProps & {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick: () => void
}