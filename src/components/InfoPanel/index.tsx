import { Label, Property, Row, StyledBox, Value } from './style'

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
        {items.map(({ value, label }, idx) => (
        <Property key={idx}>
          <Value>{value}</Value>
          <Label>{label}</Label>
        </Property>
        ))}
      </Row>
    </StyledBox>
  )
}

export default InfoPanel