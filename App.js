import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="dark"/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="MealsCategories" screenOptions={{
                    headerStyle: {backgroundColor: '#934c4c'},
                    headerTintColor: 'white',
                    contentStyle: {backgroundColor: '#934c4c'}
                }}>
                    <Stack.Screen name={"MealsCategories"} component={CategoriesScreen} options={{
                        title: 'All Categories'
                    }}/>
                    <Stack.Screen name={"MealsOverview"} component={MealsOverviewScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
