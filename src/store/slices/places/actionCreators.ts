import { AppDispatch } from 'store'
import { fetchDetailPageSuccess, placesFetching, placesFetchingError, placesFetchingSuccess } from './placesSlice'
import { TDetailPlaceResult, TLocation, TMap, TPlacesResult } from 'types'

type TFetchPlacesProps = {
  location: TLocation,
  types: string[],
  radius: number,
  map: TMap
}

export const fetchPlaces = ({
  location,
  types,
  radius,
  map 
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
        type: types[i]
      }

      let job: Promise<TPlacesResult[]> = new Promise(function (resolve, reject) {
        service.nearbySearch(request, (results: TPlacesResult[] | null, status) => {
          resolve(results || [])
        });
      });

      requests.push(job)
    }
    const allResults = await Promise.all(requests);
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

    service.getDetails(request, (place: TDetailPlaceResult | null, status) => {
      if (
        status === google.maps.places.PlacesServiceStatus.OK &&
        place &&
        place.geometry &&
        place.geometry.location
      ) {

        console.log('детально ', place)
        dispatch(fetchDetailPageSuccess(place))
      }
    });

  } catch(e) {
    dispatch(placesFetchingError('Ошибка загрузки place'))
  }
}