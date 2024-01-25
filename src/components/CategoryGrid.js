import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CategoryGrid({ title, color, FoodPress }) {
    return (
        <View style={styles.view}>
            <Pressable onPress={FoodPress} style={({ pressed }) => [styles.button, pressed ? styles.click : null]}>
                <View style={[styles.buttonView, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        height: 150,
        borderRadius: 20,
        margin: 15,
        elevation: 4,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: 'white'
    },
    button: {
        flex: 1,
    },
    buttonView: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    title: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    click: {
        opacity: 0.8
    }
})
