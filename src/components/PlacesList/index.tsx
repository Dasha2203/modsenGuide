import List from 'components/List'
import { PlaceItem } from 'data/places'
import PlaceListItem from './PlaceListItem'

type PlacesListProps = {
  onChange: (value: PlaceItem) => void
  items: PlaceItem[],
  chacked: PlaceItem[]
}

const PlacesList = ({ items, chacked, onChange }: PlacesListProps) => {

  return (
    <>
      <List
        onChange={onChange}
        items={items}
        itemAs={(item) => <PlaceListItem item={item} />}
        checked={chacked}
      />
    </>
  )
}

export default PlacesList