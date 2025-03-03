import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealDetailScreen from "./screens/MealDetailScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            sceneStyle: {backgroundColor: '#3f2f25'}
        }}>
            <Drawer.Screen name={"Categories"} component={CategoriesScreen} options={{
                title: 'All Categories',
            }}/>
            <Drawer.Screen name={"Favorites"} component={FavoritesScreen} />
        </Drawer.Navigator>
    )
}

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="MealsCategories" screenOptions={{
                    headerStyle: {backgroundColor: '#351401'},
                    headerTintColor: 'white',
                    contentStyle: {backgroundColor: '#3f2f25'}
                }}>
                    <Stack.Screen name={"MealsCategories"} component={DrawerNavigation} options={{
                        title: 'All Categories',
                        headerShown: false
                    }}/>
                    <Stack.Screen name={"MealsOverview"} component={MealsOverviewScreen}
                                  // options={({route, navigation}) => {
                                  //     const catId = route.params.categoryId
                                  //     return {
                                  //         title: catId
                                  //     }
                                  // }}
                    />
                    <Stack.Screen name={"MealDetail"} component={MealDetailScreen} ptions={{
                        title: 'About the Meal',
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
