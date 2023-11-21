import { RoutesEnum } from 'consts'
import { useAppSelector } from 'hooks/redux-hooks'
import FavoriteIcon from 'icons/FavoriteIcon'
import RightArrowIcon from 'icons/RightArrowIcon'
import Link from 'ui/Link'

import SmallCard from 'components/SmallCard'

import { Wrap } from './style'

const Favorites = () => {
  const { favoritePlaces } = useAppSelector(state => state.userReducer)

  return (
    <Wrap>
      {favoritePlaces.map(({ placeId, name, photo, formatted_address, types }) => (
        <Link sx={{ textDecoration: 'none' }} to={`/place/${placeId}`} state={{ prev: RoutesEnum.favorites }}>
          <SmallCard
            key={placeId}
            title={name || ''}
            img={photo}
            types={types}
            text={formatted_address}
            leftIcon={<FavoriteIcon fill="#C75E5E" />}
            rightIcon={<RightArrowIcon width={20} />}
          />
        </Link>

      ))}
    </Wrap>
  )
}

export default Favorites