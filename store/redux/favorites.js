import {createSlice} from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favoriteIds: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.favoriteIds.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            state.favoriteIds.splice(state.favoriteIds.indexOf(action.payload.id), 1);
        }
    }
})

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;

export default favoritesSlice.reducer;