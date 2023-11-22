import styled from '@emotion/styled/macro'
import { Box } from '@mui/material'
import { StyledInput } from '@ui/Input/styles'

export const Wrap = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  & > ${StyledInput}{
    margin-top: 0;
    margin-bottom: 30px;
  }
`