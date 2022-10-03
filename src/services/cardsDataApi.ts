import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { NUMBER_OF_CARDS, URL_API } from '../constants'
import { CardData } from '../types'

export const cardsDataApi = createApi({
  reducerPath: 'cardsDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URL_API,
  }),
  endpoints: (builder) => ({
    getItems: builder.query<CardData[], void>({
      query: () => `animals/rand/${NUMBER_OF_CARDS}`,
    }),
  }),
})

export const { useGetItemsQuery } = cardsDataApi
