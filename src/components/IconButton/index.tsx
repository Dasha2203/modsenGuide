import { IconButtonOwnProps, IconButtonProps } from "@mui/material"

import { StyledIconButton } from "./style"

type Props = IconButtonProps & {
  active?: boolean 
}

const IconButton = ({ children, active, ...props }: Props) => {
  return (
    <StyledIconButton active={active} {...props}>
      {children}
    </StyledIconButton>
  )
}

export default IconButton