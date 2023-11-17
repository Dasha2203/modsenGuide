import { useJsApiLoader } from '@react-google-maps/api'
import Drawer from 'components/Drawer'
import Map from 'components/Map'
import { useAppDispatch } from 'hooks/redux-hooks'
import useAuth from 'hooks/use-auth'
import { useEffect } from 'react'
import { getFavoritesPlaces } from 'store/slices/user/actionCreators'
import { removeUser, setUser } from 'store/slices/user/userSlice'

import { auth } from '../../firebase'
import { StyledBox } from './style'

export const Layout = () => {
  const dispatch = useAppDispatch()
  const { id: userId } = useAuth()

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:  process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
  })

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { uid: id, email } = user

        dispatch(setUser({ id, email }))
      } else {
        dispatch(removeUser())
      }
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    if (userId) {
      dispatch(getFavoritesPlaces({ id: userId.toString() }))
    }
  }, [userId])

  return (
    <StyledBox>
      <Drawer isLoaded={isLoaded} />
      <Map isLoaded={isLoaded} />
    </StyledBox>
  )
}

export default Layout