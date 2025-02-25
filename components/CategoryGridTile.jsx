import {StyleSheet, Text, View, Platform, Pressable} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const CategoryGridTile = ({title, color, onPress}) => {
    // const navigation = useNavigation() // can use this hook as navigation
    return (<View style={styles.gridItem}>
        <Pressable android_ripple={{color: '#ccc'}}
                   style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
        onPress={onPress}
        >
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>)
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        elevation: 4,
        borderColor: "#fff", // without background shadow not working!
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === "ios" ? "visible" : "hidden",
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    }
})