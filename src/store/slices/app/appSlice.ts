import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TAppState } from './types'

const initialState: TAppState = {
  openSearchBar: false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setOpenSearchBar(state, action: PayloadAction<boolean>) {
      state.openSearchBar = action.payload
    }
  }
})

export const { setOpenSearchBar } = appSlice.actions

export default appSlice.reducer