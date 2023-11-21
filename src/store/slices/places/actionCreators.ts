import { LatLngLiteral, TMap, TPlacesResult } from '@typesApp/mapTypes'
import { AppDispatch } from 'store'

import { fetchDetailPageSuccess, placesFetching, placesFetchingError, placesFetchingSuccess, setDirection } from './placesSlice'

type TFetchPlacesProps = {
  location: LatLngLiteral,
  types: string[],
  radius: number,
  map: TMap,
  query: string
}

export const fetchPlaces = ({
  location,
  types,
  radius,
  map,
  query
}: TFetchPlacesProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(placesFetching())
    let service: google.maps.places.PlacesService;
    service = new google.maps.places.PlacesService(map);

    let requests: Promise<TPlacesResult[]>[] = []

    for (let i = 0; i < types.length; i++) {
      const request = {
        location,
        radius,
        query,
        type: types[i],
      }

      let job: Promise<google.maps.places.PlaceResult[]> = new Promise(function (resolve, reject) {
        service.textSearch(request, (results: TPlacesResult[] | null, status) => {
          resolve(results || [])
        });
      });

      requests.push(job)
    }
    const allResults = await Promise.all(requests)
    console.log('all results: ', allResults.flat())
    dispatch(placesFetchingSuccess(allResults.flat()))

  } catch (e) {
    dispatch(placesFetchingError('Ошибка загрузки places'))
  }
}

type TFetchPlaceProps = {
  map: TMap,
  placeId: string
}

export const fetchPlace = ({ map, placeId }: TFetchPlaceProps) => async (dispatch: AppDispatch) => {
  try {
    //"ChIJN1t_tDeuEmsRUsoyG83frY4"
    const request = {
      placeId,
      fields: [
        'name',
        'formatted_address',
        'place_id',
        'geometry',
        'photos',
        'formatted_address',
        'url',
        'types',
        'icon'
      ],
    }

    const service = new google.maps.places.PlacesService(map);

    service.getDetails(request, (place: google.maps.places.PlaceResult | null, status) => {
      if (
        status === google.maps.places.PlacesServiceStatus.OK &&
        place &&
        place.geometry &&
        place.geometry.location
      ) {
        console.log('детально ', place)
        dispatch(fetchDetailPageSuccess({
          ...place,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        }
        ))
      }
    });

  } catch (e) {
    dispatch(placesFetchingError('Ошибка загрузки place'))
  }
}

export const fetchDirection = (origin: LatLngLiteral, destination: LatLngLiteral) => async (dispatch: AppDispatch) => {
  try {
    const service = new google.maps.DirectionsService()

    service.route({
      origin,
      destination,
      travelMode: google.maps.TravelMode.DRIVING
    },
      (result, status) => {
        if (status === "OK" && result) {
          dispatch(setDirection(result))
        }
      }
    )

  } catch (e) {
    console.log('Ошибка построения маршрута')
  }
}