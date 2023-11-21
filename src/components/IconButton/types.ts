import { IconButtonProps } from '@mui/material'

export type TIconButtonProps = IconButtonProps & {
  active?: boolean
  typeColor?: 'dark' | 'light' | 'main'
}