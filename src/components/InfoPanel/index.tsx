import { Property, Row, StyledBox, Value, Label } from './style'

type TItems = {
  label: string
  value?: string
}

type Props = {
  items: TItems[]
}

const InfoPanel = ({ items }: Props) => {

  return (
    <StyledBox>
      <Row>
        {items.map(item => (
          <Property>
            <Value>{item.value}</Value>
            <Label>{item.label}</Label>
          </Property>
        ))}
      </Row>
    </StyledBox>
  )
}

export default InfoPanel