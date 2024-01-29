import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { FOODS, CATEGORIES } from '../../data/dummy-data'
import FoodItem from '../components/FoodItem'
import { useSelector } from 'react-redux'
export default function Favorites({ route, navigation }) {


    const favoritefoodsIds = useSelector((state) => state.favoriteFoods.ids)

    const favoriteFoods = FOODS.filter((food) => favoritefoodsIds.includes(food.id))

    function renderData(itemData) {
        const FoodProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
        }
        function PressHandle() {
            navigation.navigate('Food', { FoodIds: itemData.item.id })
        }
        return (
            <FoodItem PressFood={PressHandle} {...FoodProps} />
        )
    }
    return (
        <View>
            <FlatList
                data={favoriteFoods}
                renderItem={renderData}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
