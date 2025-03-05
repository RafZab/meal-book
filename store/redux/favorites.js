import {createSlice} from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favoriteIds: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.favoriteId.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            state.favoriteIds.splice(state.favoriteIds.indexOf(action.payload.id), 1);
        }
    }
})

export const addFavorite = (state, action) => favoritesSlice.actions.addFavorite;
export const removeFavorite = (state, action) => favoritesSlice.actions.removeFavorite;

export default favoritesSlice.reducer;