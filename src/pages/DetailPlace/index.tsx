import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

import { Card, TitleCard, Wrap } from './style'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import { fetchPlace } from 'store/slices/places/actionCreators'
import { fetchDetailPageSuccess } from 'store/slices/places/placesSlice'

const DetailPlace = () => {
  const dispatch = useAppDispatch()
  const { places, map, placeDetail } = useAppSelector(state => state.placesReducer)
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
              <Typography gutterBottom variant="h6" component="div">
                {placeDetail.formatted_address}
              </Typography>
            )}
          </CardContent>
          <CardActions>
            <Button size="small">Сохранено</Button>
            <Button size="small">Маршрут</Button>
          </CardActions>
        </Card>
      )}
    </Wrap>
  )
}

export default DetailPlace