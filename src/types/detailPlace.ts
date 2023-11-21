export type TDetailPlaceResult = {
  name?: string
  place_id?: string
  types?: string[]
  url?: string
  vicinity?: string
  icon?: string
  geometry?: google.maps.places.PlaceGeometry
  lat?: number
  lng?: number
  formatted_address?: string
  photos?: google.maps.places.PlacePhoto[] | undefined
}