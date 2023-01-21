import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { URL_API } from '../constants'
import { Data } from '../types'

export const cardsDataApi = createApi({
  reducerPath: 'cardsDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URL_API,
  }),
  endpoints: (builder) => ({
    getItems: builder.query<Data, void>({
      query: () => 'characters',
    }),
  }),
})

export const { useGetItemsQuery } = cardsDataApi
