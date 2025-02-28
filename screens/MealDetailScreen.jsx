import {View, Text} from "react-native";

const MealDetailScreen = ({route}) => {
    const catId = route.params.mealId; // or const route = useRoute()
    return (
        <View>
            <Text>DSA</Text>
        </View>
    )
}

export default MealDetailScreen