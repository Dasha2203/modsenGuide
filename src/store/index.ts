import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user/userSlice'
import placesReducer from './slices/places/placesSlice'

const rootReducer = combineReducers({
  userReducer,
  placesReducer
})
export const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>