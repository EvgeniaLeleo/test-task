import { RootState } from '..'

export const favoriteItemsSelector = (store: RootState) =>
  store.cardsData.favoriteItems

export const initRequestSelector = (store: RootState) =>
  store.cardsData.initRequest
