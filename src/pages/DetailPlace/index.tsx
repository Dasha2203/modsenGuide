import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import TypesList from '@components/TypesList'
import { RoutesEnum } from '@consts'
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks'
import useAuth from '@hooks/use-auth'
import { useDeviceType } from '@hooks/useDeviceType'
import DirectionIcon from '@icons/DirectionIcon'
import FavoriteIcon from '@icons/FavoriteIcon'
import LeftArrowIcon from '@icons/LeftArrowIcon'
import { CardMedia } from '@mui/material'
import { setOpenSearchBar } from '@store/slices/app/appSlice'
import { fetchDirection, fetchPlace } from '@store/slices/places/actionCreators'
import { fetchDetailPageSuccess, setDirection } from '@store/slices/places/placesSlice'
import { addFavoritesPlace, removeFavoritesPlaces } from '@store/slices/user/actionCreators'
import { TFavoritePlace } from '@typesApp/favoritePlace'
import Button from '@ui/Button'
import SectionLink from '@ui/SectionLink'

import { Card, CardActions, CardContent, TextCard, TitleCard, Wrap } from './styles'

const DetailPlace = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const isMobile = useDeviceType(600)
  const location = useLocation()
  const dispatch = useAppDispatch()
  const { isAuth } = useAuth()
  const { places, map, placeDetail } = useAppSelector(state => state.placesReducer)
  const { favoritePlaces, user, userLocation, } = useAppSelector(state => state.userReducer)
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setOpenSearchBar(true))

    return () => {
      dispatch(setDirection(null))
    }
  }, [])

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
    if (!isAuth) navigate(RoutesEnum.login)
    if (!id || !placeDetail || !user.id) return

    if (isFavorite) {
      dispatch(removeFavoritesPlaces({ placeId: id }))
    } else {
      const { name, place_id: placeId, types, url, geometry, photos, formatted_address } = placeDetail

      const favoritePlace: TFavoritePlace = {
        name,
        placeId,
        types,
        url: url || '',
        lat: geometry?.location?.lat(),
        lng: geometry?.location?.lng(),
        photo: photos?.[0].getUrl(),
        formatted_address,
        userId: user.id
      }

      dispatch(addFavoritesPlace(favoritePlace))
    }
  }

  function showDirection() {
    if (!userLocation || !placeDetail || !placeDetail.geometry || !placeDetail.geometry.location) return

    const placeLocation = {
      lat: placeDetail.geometry.location.lat(),
      lng: placeDetail.geometry.location.lng(),
    }

    dispatch(fetchDirection(userLocation, placeLocation))
    if (isMobile) {
      dispatch(setOpenSearchBar(false))
    }
  }

  return (
    <Wrap>
      {location.state?.prev === RoutesEnum.favorites && (
        <SectionLink to={RoutesEnum.favorites} sx={{ mb: '15px' }}>
          <LeftArrowIcon />
          Избранное
        </SectionLink>
      )}
      {placeDetail && (
        <Card>
          <CardMedia
            component="img"
            alt={placeDetail.name}
            width={'100%'}
            sx={{ borderRadius: '10px', maxHeight: '300px' }}
            image={placeDetail.photos?.[0]?.getUrl()}
          />
          <CardContent>
            {placeDetail.types && <TypesList types={placeDetail.types} />}
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
              startIcon={<FavoriteIcon fill={isFavorite ? '#808080' : '#C75E5E'} />}
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