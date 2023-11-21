import { TFavoritePlace } from "types/favoritePlace"
import { TUser } from "types/user"

export type TUserState = {
  error: string
  favoritePlaces: TFavoritePlace[]
  isLoading: boolean
  user: TUser,
  userLocation: {lat: number, lng: number} | null
}