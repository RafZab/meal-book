import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContext} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>

            <StatusBar style="dark"/>
            <NavigationContext>
                <Stack.Navigator>
                    <Stack.Screen name={"MealsCategories"} component={CategoriesScreen} />
                </Stack.Navigator>
            </NavigationContext>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
