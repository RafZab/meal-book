import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import {useLayoutEffect} from "react";
import IconButton from "../components/IconButton";
import {useFavorites} from "../store/context/favorites-context";

const MealDetailScreen = ({route, navigation}) => {
    const {favoriteIds, removeFavorite, addFavorite} = useFavorites()

    const mealId = route.params.mealId; // or const route = useRoute()
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavorite = favoriteIds.includes(mealId);

    const changeFavoriteStatusHandler = () => {
        if (mealIsFavorite) {
            removeFavorite(mealId);
        } else {
            addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'}
                                color={"white"}
                                onPress={changeFavoriteStatusHandler}
                    />
                )
            }
        })
    }, [navigation, changeFavoriteStatusHandler]);


    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: "100%",
        height: "350",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 8,
        textAlign: "center",
        color: "white",
    },
    detailText: {
        color: "white",
    },
    subtitleContainer: {
        margin: 4,
        marginHorizontal: 24,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2
    },
    subtitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    listOuterContainer: {
        alignItems: "center",
    },
    listContainer: {
        width: "80%",
    }
})