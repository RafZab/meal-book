import {FlatList, StyleSheet, View} from "react-native";
import MealItem from "./MealItem";

const MealsList = ({items}) => {
    const renderMealItem = (mealData) => {
        const mealItemProps = {
            id: mealData.item.id,
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
            <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
        </View>
    )
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})