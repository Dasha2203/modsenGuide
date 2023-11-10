import { Box } from '@mui/material'
import styled from '@emotion/styled/macro'

import { StyledInput } from 'components/Input/style'
import { StyledList } from 'components/List/style'
import Search from 'icons/SearchIcon'
import { StyledAutoComplete } from 'components/AutoComplete/style'

export const WrapSearchBar = styled(Box)`
  padding: 25px 25px 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-left-width: 3px;
  border-left-color: #C4C4C4;
  border-left-style: solid;

  ${StyledAutoComplete} {
    margin-bottom: 35px;
  }

  ${StyledInput} {
    margin: 0;
  }

  ${StyledList} {
    margin-bottom: 30px;
  }
`

export const SearchIcon = styled(Search)(({ theme }) => ({
  width: '22px',
  height: '22px',
  fill: 'white',
}),
);
