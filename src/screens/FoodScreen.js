import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { FOODS } from '../../data/dummy-data'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../store/redux/favorites'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function FoodScreen({ route, navigation }) {
    const FoodId = route.params.FoodIds

    const FavoriFoodIds = useSelector((state) => state.favoriteFoods.ids)

    const foodisFavorite = FavoriFoodIds.includes(FoodId)
    const Food = FOODS.find((food) => food.id == FoodId)

    const dispatch = useDispatch()

    function changeFavorite() {
        if (foodisFavorite) {
            dispatch(removeFavorite({ id: FoodId }))
        } else {
            dispatch(addFavorite({ id: FoodId }))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={changeFavorite}>
                    <AntDesign name={foodisFavorite ? 'star' : 'staro'} size={20} />
                </TouchableOpacity>
            )
        });
    }, [navigation]);





    const Render = ({ item }) => {
        return (
            <View style={styles.flatList}>
                <Text style={styles.flatListitems}>{item}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: Food.imageUrl }} style={styles.image} />
            <View style={styles.title_body}>
                <Text style={styles.title}>{Food.title}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.complexity}>{Food.complexity}</Text>
                <Text style={styles.complexity}>{Food.affordability}</Text>
            </View>
            <View>
                <FlatList data={Food.ingredients}
                    renderItem={Render} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 250,
        resizeMode: 'stretch'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        padding: 10,
        backgroundColor: '#E6A4B4',
        color: '#fff',
    },
    title_body: {
        borderRadius: 50,
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 50,
        marginVertical: 10
    },
    complexity: {
        fontSize: 15,
        fontWeight: '500'
    },
    flatlist: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    flatListitems: {
        textAlign: 'center',
        padding: 13,
        margin: 10,
        backgroundColor: '#F5EEE6',
        color: '#A87C7C',
        fontSize: 15,
        fontWeight: 'bold'
    },
})
