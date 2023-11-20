import { combineReducers, configureStore } from '@reduxjs/toolkit'

import appReducer from './slices/app/appSlice'
import placesReducer from './slices/places/placesSlice'
import userReducer from './slices/user/userSlice'

const rootReducer = combineReducers({
  appReducer,
  userReducer,
  placesReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>