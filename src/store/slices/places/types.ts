import { TDetailPlaceResult } from '@typesApp/detailPlace'
import { DirectionsResult, TPlacesResult } from '@typesApp/mapTypes'
import { PlaceTypeItem } from '@typesApp/placeTypeItem'

export type TPlaceState = {
  checkedTypesPlaces: PlaceTypeItem[],
  direction: DirectionsResult | null
  error: string
  isLoading: boolean
  map: google.maps.Map | null
  placeDetail: TDetailPlaceResult | null
  places:  TPlacesResult[],
  radius: number
  typesPlaces: PlaceTypeItem[],
  zoom: number
}