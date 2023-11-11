
export enum PlacesTypes {
  Restaurant = 'restaurant',
  Food = 'food',
  Establishment = 'establishment',
  MealTakeAway = 'meal_takeaway',
  PointOfInterest = 'point_of_interest',
  Cafe = 'cafe',
  Sport = 'gym'
}

export interface IPlace {
  name: string
  geometry: {
    location : {
      lat : number,
      lng : number
    },
  },
  types: PlacesTypes[]
  vicinity: string
}