import {StyleSheet, View, Text} from "react-native";

const Subtitle = ({children}) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>
                {children}
            </Text>
        </View>
    )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitleContainer: {
        margin: 4,
        marginHorizontal: 12,
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
    }
})