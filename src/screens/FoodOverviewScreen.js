import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { FOODS, CATEGORIES } from '../../data/dummy-data'
import FoodItem from '../components/FoodItem'
export default function FoodOverviewScreen({ route, navigation }) {
    const CategoryId = route.params.CategoryId

    const displayedFoods = FOODS.filter((foodItem) => {
        return foodItem.categoryIds.indexOf(CategoryId) >= 0
    })


    useLayoutEffect(() => {
        const CategoryTitle = CATEGORIES.find((category) => category.id == CategoryId).title

        navigation.setOptions({ title: CategoryTitle })
    }, [navigation, CategoryId])


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
                data={displayedFoods}
                renderItem={renderData}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
