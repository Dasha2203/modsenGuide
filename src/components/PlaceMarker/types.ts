import { TLocation } from '@typesApp/mapTypes'

export type TPlaceMarkProps = {
  handleClick: (value: string) => void
  placeId: string | undefined
  position: TLocation
  types: string[] | undefined,
}