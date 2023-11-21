
import styled from "@emotion/styled/macro"
import { Box } from '@mui/material'
import Search from 'icons/SearchIcon'
import { StyledInput } from 'ui/Input/styles'

import { StyledAutoComplete } from 'components/AutoComplete/styles'
import { StyledList } from 'components/List/styles'

export const WrapSearchBar = styled(Box)`

  padding: 25px 25px 0;
  display: flex;
  flex-direction: column;
  width: '100%';
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

  @media (max-width: 599px) {
    padding: 15px 10px;
  }

`

export const SearchIcon = styled(Search)(({ theme }) => ({
  width: '22px',
  height: '22px',
  fill: 'white',
}),
);
