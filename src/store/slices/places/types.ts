import { TDetailPlaceResult } from 'types/detailPlace'
import { DirectionsResult, TPlacesResult } from 'types/mapTypes'
import { PlaceTypeItem } from 'types/placeTypeItem'

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