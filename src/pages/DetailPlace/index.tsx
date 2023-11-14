import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardContent, CardMedia } from '@mui/material'

import { Card, CardActions, TextCard, TitleCard, Wrap } from './style'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import { fetchDirection, fetchPlace } from 'store/slices/places/actionCreators'
import { fetchDetailPageSuccess } from 'store/slices/places/placesSlice'
import { addFavoritesPlace, removeFavoritesPlaces } from 'store/slices/user/actionCreators'
import { TFavoritePlace } from 'types'
import DirectionIcon from 'icons/DirectionIcon'
import FavoriteIcon from 'icons/FavoriteIcon'
import Button from 'components/Button'

const DetailPlace = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const dispatch = useAppDispatch()
  const { places, map, placeDetail } = useAppSelector(state => state.placesReducer)
  const { favoritePlaces, user, userLocation } = useAppSelector(state => state.userReducer)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    let place = places.find((place) => place.place_id === id)

    if (!place && id && map) {
      dispatch(fetchPlace({ placeId: id, map }))
      return
    }
    if (place) {
      dispatch(fetchDetailPageSuccess(place))
    }

  }, [id, map])

  useEffect(() => {
    if (!placeDetail) return

    let place = favoritePlaces.find(i => i.placeId === placeDetail.place_id)

    if (place) {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }

  }, [placeDetail, favoritePlaces])

  function handleClick() {
    if (!id || !placeDetail || !user.id) return

    if (isFavorite) {
      dispatch(removeFavoritesPlaces({ placeId: id }))
    } else {
      const favoritePlace: TFavoritePlace = {
        name: placeDetail.name,
        placeId: placeDetail.place_id,
        types: placeDetail.types,
        url: placeDetail.url,
        lat: placeDetail.geometry?.location?.lat(),
        lng: placeDetail.geometry?.location?.lng(),
        photo: placeDetail.photos?.[0].getUrl(),
        formatted_address: placeDetail?.formatted_address,
        userId: user.id
      }

      dispatch(addFavoritesPlace(favoritePlace))
    }
  }

  function showDirection() {
    if (!userLocation || !placeDetail) return

    dispatch(fetchDirection(userLocation, userLocation))
  }

  return (
    <Wrap>
      {placeDetail && (
        <Card>
          <CardMedia
            component="img"
            alt={placeDetail.name}
            width={'100%'}
            sx={{ borderRadius: '10px' }}
            image={placeDetail.photos?.[0]?.getUrl()}
          />
          <CardContent>
            <TitleCard gutterBottom variant="h5">
              {placeDetail.name}
            </TitleCard>
            {placeDetail.formatted_address && (
              <TextCard gutterBottom sx={{ color: '#C4C4C4' }}>
                {placeDetail.formatted_address}
              </TextCard>
            )}
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              startIcon={<FavoriteIcon />}
              onClick={handleClick}
            >
              {isFavorite ? 'Сохранено' : 'Сохранить'}
            </Button>
            <Button
              size="small"
              variant="contained"
              startIcon={<DirectionIcon />}
              onClick={showDirection}
            >
              Маршрут
            </Button>
          </CardActions>
        </Card>
      )}
    </Wrap>
  )
}

export default DetailPlace