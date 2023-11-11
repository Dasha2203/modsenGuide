import { useAppSelector } from './redux-hooks'

const useAuth = () => {
  const {user, favoritePlaces} = useAppSelector(state => state.userReducer)

  return ({
    isAuth: !!user.email,
    email: user.email,
    id: user.id,
    favoritePlaces
  })
} 

export default useAuth