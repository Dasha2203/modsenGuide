
import { Wrap } from './style'

type Props = {
  children: React.ReactNode | React.ReactNode[]
}

const CombineButtons = ({ children }: Props) => {
  return (
    <Wrap>
      {children}
    </Wrap>
  )
}

export default CombineButtons