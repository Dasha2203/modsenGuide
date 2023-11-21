import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from 'models/IUser'
import { TFavoritePlace } from 'types'

interface UserState {
  user: IUser,
  isLoading: boolean
  error: string
  userLocation: {lat: number, lng: number} | null
  favoritePlaces: TFavoritePlace[]
}

const initialState: UserState = {
  user: {
    email: null,
    id: null
  },
  favoritePlaces: [],
  isLoading: false,
  error: '',
  userLocation: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user.email = action.payload.email
      state.user.id = action.payload.id
    },
    removeUser(state) {
      state.user.email = null
      state.user.id = null
    },
    setFavoritesPlaces(state, action: PayloadAction<TFavoritePlace[]>) {
      state.favoritePlaces = action.payload
    },
    pushFavoritesPlace(state, action: PayloadAction<TFavoritePlace>) {
      state.favoritePlaces.push(action.payload)
    },
    removeFavoritesPlace(state, action: PayloadAction<string>) {
      state.favoritePlaces = state.favoritePlaces.filter(({ placeId }) => placeId !== action.payload)
    },
    setUserLocation(state, action: PayloadAction<{lat: number, lng: number}>) {
      state.userLocation = action.payload
    }
  }
})

export const {
  setUser,
  removeUser,
  setUserLocation,
  setFavoritesPlaces,
  pushFavoritesPlace,
  removeFavoritesPlace
} = userSlice.actions

export default userSlice.reducer