import { db } from '../../../firebase'
import { addDoc, collection, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { AppDispatch } from 'store';
import { TFavoritePlace } from 'types';
import { pushFavoritesPlaces, setFavoritesPlaces } from './userSlice';

const favoritesCollection = 'favoretesPlaces'

export const getFavoritesPlaces = ({ id }: { id: string }) => async (dispatch: AppDispatch) => {
  try {
    const placesRef = collection(db, favoritesCollection)
    const placesQuery = query(placesRef , where("userId", "==", id));
    const placesDocs = await getDocs(placesQuery)
    let places = placesDocs.docs.map(x => x.data() as TFavoritePlace)

    dispatch(setFavoritesPlaces(places))

  } catch (err) {
    console.log(err)
  }
}

export const addFavoritesPlaces = (place: TFavoritePlace) => async (dispatch: AppDispatch) => {
  try {
    await addDoc(collection(db, favoritesCollection), place)

    dispatch(pushFavoritesPlaces(place))
  } catch (err) {
    console.log(err)
  }
}

export const removeFavoritesPlaces = ({placeId}: { placeId: string }) => async (dispatch: AppDispatch) => {
  try {
    const usersRef = collection(db, favoritesCollection)
    const placesQuery = query(usersRef, where("placeId", "==", placeId));
    const placesDocs = await getDocs(placesQuery)
    const batch = writeBatch(db);
  
    placesDocs.forEach(doc => {
      batch.delete(doc.ref);
    });
  
    await batch.commit();

  } catch (err) {
    console.log(err)
  }
}