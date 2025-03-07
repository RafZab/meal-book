import MealsList from "../components/MealsList/MealsList";
import {MEALS} from "../data/dummy-data";
import {StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";


const FavoritesScreen = () => {
    // const {favoriteIds} = useFavorites(); // AS USE CONTEXT
    const favoriteIds = useSelector((state) => state.favoritesMeals.favoriteIds) // AS USE REDUX

    const favoriteMeals = MEALS.filter(m => favoriteIds.includes(m.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        )
    }

    return (
        <MealsList items={favoriteMeals}/>
    )
}
export default FavoritesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "white",
    }
})