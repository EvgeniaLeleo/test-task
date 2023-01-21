export type CardData = {
  _id: number
  films: string[]
  shortFilms: string[]
  tvShows: string[]
  videoGames: string[]
  parkAttractions: string[]
  allies: string[]
  enemies: string[]
  name: string
  imageUrl: string
  url: string
}

export type Data = {
  data: CardData[]
}
