import { Label, Property, Row, StyledBox, Value } from './style'
import { TInfoPanelProps } from './types'

const InfoPanel = ({ items }: TInfoPanelProps) => {

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