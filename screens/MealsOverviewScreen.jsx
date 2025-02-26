import {MEALS} from "../data/dummy-data";
import {View, Text, StyleSheet, FlatList} from "react-native";
import {useRoute} from "@react-navigation/native";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({route}) => {
    const catId = route.params.categoryId; // or const route = useRoute()
    const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(catId) >= 0);

    const renderMealItem = (mealData) => {
        const mealItemProps = {
            title: mealData.item.title,
            imageUrl: mealData.item.imageUrl,
            duration: mealData.item.duration,
            complexity: mealData.item.complexity,
            affordability: mealData.item.affordability,
        }
        return <MealItem {...mealItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})