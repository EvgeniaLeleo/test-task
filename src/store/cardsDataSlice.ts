import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  favoriteItems: number[]
  initRequest: boolean
}

const initialState: State = {
  favoriteItems: [],
  initRequest: true,
}

const cardsDataSlice = createSlice({
  name: 'cardsData',
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<number>) {
      state.favoriteItems.push(action.payload)
    },
    removeFromFavorites(state, action: PayloadAction<number>) {
      state.favoriteItems = state.favoriteItems.filter(
        (id) => id !== action.payload
      )
    },
    setInitRequest(state, action: PayloadAction<boolean>) {
      state.initRequest = action.payload
    },
  },
})

export const { addToFavorites, removeFromFavorites, setInitRequest } =
  cardsDataSlice.actions

export default cardsDataSlice.reducer
