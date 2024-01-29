import { createSlice } from "@reduxjs/toolkit";

const FavoriSlice = createSlice({
    name: 'FavoriFood',
    initialState: {
        ids: []
    },
    reducers: {
        addfav: (state, action) => {
            state.ids.push(action.payload.id)
        },
        removefav: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id, 1))
        }
    }
})
export const addFavorite = FavoriSlice.actions.addfav
export const removeFavorite = FavoriSlice.actions.removefav
export default FavoriSlice.reducer
