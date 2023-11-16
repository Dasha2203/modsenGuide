import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { placesTypes, PlaceTypeItem } from 'data/places'
import { DirectionsResult, TDetailPlaceResult, TMap, TPlacesResult } from 'types'

interface IPlaceState {
  places:  TPlacesResult[],
  placeDetail: TDetailPlaceResult | null
  typesPlaces: PlaceTypeItem[],
  checkedTypesPlaces: PlaceTypeItem[],
  map: google.maps.Map | null
  zoom: number
  isLoading: boolean
  error: string
  direction: DirectionsResult | null
  radius: number
}

const initialState: IPlaceState = {
  places: [],
  placeDetail: null,
  typesPlaces: placesTypes,
  checkedTypesPlaces: placesTypes,
  direction: null,
  map: null,
  zoom: 15,
  isLoading: false,
  error: '',
  radius: 10000,
}

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    placesFetching(state) {
      state.isLoading = true
    },
    placesFetchingSuccess(state, action: PayloadAction<TPlacesResult[]>) {
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
    setZoom(state, action: PayloadAction<number>) {
     state.zoom = action.payload
    },
    setDirection(state, action: PayloadAction<DirectionsResult | null>) {
     state.direction = action.payload
    },
    setRadius(state, action: PayloadAction<number>) {
     state.radius = action.payload
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
  setDirection,
  setZoom,
  setRadius
} = placesSlice.actions

export default placesSlice.reducer