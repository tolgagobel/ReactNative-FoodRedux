import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import CategoryScreen from './screens/CategoryScreen'
import FoodOverviewScreen from './screens/FoodOverviewScreen'
import FoodScreen from './screens/FoodScreen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from './screens/Favorites'

export default function App() {
    const Stack = createNativeStackNavigator()
    const Drawer = createDrawerNavigator();

    function DrawerNavigation() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen options={({ headerTitle: 'Tüm Kategoriler' })} name="Category" component={CategoryScreen} />
                <Drawer.Screen name="Favorites" component={Favorites} />
            </Drawer.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: '#fff' } }}>
                <Stack.Screen options={{headerShown:false}} name='Drawer' component={DrawerNavigation} />
                <Stack.Screen name='FoodOverview' component={FoodOverviewScreen} />
                <Stack.Screen
                    options={{
                        headerRight: () => (
                            <TouchableOpacity>
                                <AntDesign name="staro" size={20} />
                            </TouchableOpacity>
                        ),
                    }}
                    name='Food'
                    component={FoodScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
