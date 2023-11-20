import { Box } from '@mui/material'

import TypesList from 'components/TypesList'

import { Card, CardFooter, CardHeader, CardImage, CardText, CardTitle } from './style'

type PropsSmallCard = {
  title: string
  img?: string,
  text?: string,
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  types?: string[]
}

const SmallCard = ({ title, img, text, leftIcon, rightIcon, types }: PropsSmallCard) => {
  return (
    <Card>
      <CardHeader>
        <CardImage image={img} />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {types && <TypesList types={types}/>}
      {text && <CardText>{text}</CardText>}
      {(leftIcon || rightIcon) && (
        <CardFooter>
          {leftIcon && (
            <Box>
              {leftIcon}
            </Box>
          )}
          {rightIcon && (
            <Box>
              {rightIcon}
            </Box>
          )}
        </CardFooter>
      )}
    </Card>
  )
}

export default SmallCard