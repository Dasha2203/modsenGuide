
import { Wrap } from './style'
import { TCombineButtonProps } from './types'

const CombineButtons = ({ children }: TCombineButtonProps) => {
  return (
    <Wrap>
      {children}
    </Wrap>
  )
}

export default CombineButtons