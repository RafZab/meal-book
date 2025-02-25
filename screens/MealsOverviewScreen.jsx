import {MEALS} from "../data/dummy-data";
import {View, Text, StyleSheet} from "react-native";
import {useRoute} from "@react-navigation/native";

const MealsOverviewScreen = ({route}) => {
    const catId = route.params.categoryId; // or const route = useRoute()


    return (
        <View style={styles.container}>
            <Text>
                Meals Overview Screen - {catId}
            </Text>
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