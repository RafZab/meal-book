import {StyleSheet, Text, View, Platform, Pressable, Image} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const MealItem = ({id, title, imageUrl, duration, complexity, affordability}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}}
                       onPress={() => navigation.navigate('MealDetail', {
                           mealId: id
                       })}
                       style={({pressed}) => (pressed ? styles.buttonPressed : null)}>
                <View style={styles.interContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailsItem}>{duration}m</Text>
                        <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        borderColor: "#fff", // without background shadow not working!
        shadowColor: "#000",
        shadowOpacity: 0.35,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 16,
        overflow: Platform.OS === "ios" ? "visible" : "hidden",
    },
    interContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    buttonPressed: {
        opacity: 0.5
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    detailsItem: {
        marginHorizontal: 4,
        fontSize: 12,
    }
})