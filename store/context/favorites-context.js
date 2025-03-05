import {createContext, useContext, useState} from "react";

const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {
    },
    removeFavorite: (id) => {
    },
})

const FavoritesContextProvider = ({children}) => {
    const [favoritesMealsIds, setFavoritesMealsIds] = useState([])

    const addFavorite = (id) => {
        setFavoritesMealsIds((currentFavIds) => [...currentFavIds, id])
    }

    const removeFavorite = (id) => {
        setFavoritesMealsIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id))
    }

    const values = {
        ids: favoritesMealsIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={values}>{children}</FavoritesContext.Provider>
}

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (context == null) {
        throw new Error("useFavorites must be defined");
    }
    return context;
}

export default FavoritesContextProvider