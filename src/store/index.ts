import { configureStore } from '@reduxjs/toolkit'

import cardsDataReducer from './cardsDataSlice'
import { cardsDataApi } from '../services/cardsDataApi'

export const store = configureStore({
  reducer: {
    cardsData: cardsDataReducer,
    [cardsDataApi.reducerPath]: cardsDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsDataApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
