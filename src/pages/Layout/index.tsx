import { useEffect } from 'react'
import { useJsApiLoader } from '@react-google-maps/api'


import useAuth from 'hooks/use-auth'
import Drawer from 'components/Drawer'
import Map from 'components/Map'
import { useAppDispatch } from 'hooks/redux-hooks'
import { auth } from '../../firebase'
import { removeUser, setUser } from 'store/slices/user/userSlice'
import { StyledBox } from './style'
import { getFavoritesPlaces } from 'store/slices/user/actionCreators'

export const Layout = () => {
  const dispatch = useAppDispatch()
  const { id: userId } = useAuth()

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAnFQhA1orm7HGeZLhawF54VPNTU3vwi4E",
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