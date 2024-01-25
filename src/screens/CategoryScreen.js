import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../../data/dummy-data'
import CategoryGrid from '../components/CategoryGrid'

export default function CategoryScreen({ navigation }) {
    function RenderCategory(DataItem) {

        function PressHandler() {
            navigation.navigate('FoodOverview', {CategoryId: DataItem.item.id})
        }

        return (
            <CategoryGrid FoodPress={PressHandler} title={DataItem.item.title} color={DataItem.item.color} />
        )
    }
    return (
        <View>
            <FlatList data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={RenderCategory}
                numColumns={2} />
        </View>
    )
}

const styles = StyleSheet.create({})
