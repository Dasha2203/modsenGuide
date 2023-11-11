export type TLocation = google.maps.LatLng
export type TMap = google.maps.Map
export type TPlacesResult = google.maps.places.PlaceResult

//Results
export type TDetailPlaceResult = {
  name?: string
  place_id?: string
  types?: string[]
  url?: string
  vicinity?: string
  icon?: string
  geometry?: google.maps.places.PlaceGeometry
  formatted_address?: string
  photos?: google.maps.places.PlacePhoto[] | undefined
}

export type TFavoritePlace = {
  name?: string
  placeId?: string
  types?: string[]
  url?: string
  icon?: string
  lat: number
  lng: number
  photo: string
  formatted_address?: string
  userId: string
}