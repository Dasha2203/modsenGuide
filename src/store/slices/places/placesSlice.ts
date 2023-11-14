import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { placesTypes, PlaceTypeItem } from 'data/places'
import { DirectionsResult, TDetailPlaceResult, TMap } from 'types'

interface IPlaceState {
  places:  google.maps.places.PlaceResult[],
  placeDetail: TDetailPlaceResult | null
  typesPlaces: PlaceTypeItem[],
  checkedTypesPlaces: PlaceTypeItem[],
  map: google.maps.Map | null
  isLoading: boolean
  error: string
  direction: DirectionsResult | null
}

const initialState: IPlaceState = {
  places: [],
  placeDetail: null,
  typesPlaces: placesTypes,
  checkedTypesPlaces: placesTypes,
  direction: null,
  map: null,
  isLoading: false,
  error: ''
}

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    placesFetching(state) {
      state.isLoading = true
    },
    placesFetchingSuccess(state, action: PayloadAction< google.maps.places.PlaceResult[]>) {
      state.isLoading = false
      state.error = ''
      state.places = action.payload
    },
    placesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    checkTypePlaces(state, action: PayloadAction<PlaceTypeItem>) {
      const currentIndex = state.checkedTypesPlaces.findIndex(i => i.id === action.payload.id)
  
      if (currentIndex === -1) {
        state.checkedTypesPlaces.push(action.payload);
      } else {
        state.checkedTypesPlaces.splice(currentIndex, 1);
      }
    },
    fetchDetailPageSuccess(state, action: PayloadAction<TDetailPlaceResult | null>) {
      state.isLoading = false
      state.error = ''
      state.placeDetail = action.payload
    },
    setMap(state, action: PayloadAction<TMap | null>) {
     state.map = action.payload
    },
    setDirection(state, action: PayloadAction<DirectionsResult | null>) {
     state.direction = action.payload
    }
  }
})

export const {
  placesFetching,
  placesFetchingError,
  placesFetchingSuccess,
  fetchDetailPageSuccess,
  checkTypePlaces,
  setMap,
  setDirection
} = placesSlice.actions

export default placesSlice.reducer