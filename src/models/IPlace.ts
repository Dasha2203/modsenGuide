import { PlacesTypesEnum } from 'consts'

export interface IPlace {
  name: string
  geometry: {
    location : {
      lat : number,
      lng : number
    },
  },
  types: PlacesTypesEnum[]
  vicinity: string
}