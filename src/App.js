import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import CategoryScreen from './screens/CategoryScreen'
import FoodOverviewScreen from './screens/FoodOverviewScreen'
import FoodScreen from './screens/FoodScreen'

export default function App() {
    const Stack = createNativeStackNavigator()
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:'#fff'}}}>
        <Stack.Screen options={({headerTitle:'Tüm Kategoriler'})} name='Category' component={CategoryScreen}/>
        <Stack.Screen name='FoodOverview' component={FoodOverviewScreen}/>
        <Stack.Screen name='Food' component={FoodScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
