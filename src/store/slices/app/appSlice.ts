import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  openSearchBar: boolean
}

const initialState: AppState = {
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