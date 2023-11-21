import { StyledLabel } from './styles'

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledLabel>
      {children}
    </StyledLabel>
  )
}

export default Label