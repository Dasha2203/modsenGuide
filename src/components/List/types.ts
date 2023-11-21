export type TListProps<A> = {
  onChange: (value: A) => void
  checked: A[]
  itemAs: (option: A) => React.ReactNode
  items: A[]
}
