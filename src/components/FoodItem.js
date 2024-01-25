import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FoodItem({ id,
    title,
    imageUrl,
    affordability,
    complexity,
    PressFood }
) {

    return (
        <View style={styles.container}>
            <Pressable onPress={PressFood}>
                <View>
                    <View style={styles.imgView}>
                        <ImageBackground source={{ uri: imageUrl }} resizeMode="cover" style={styles.image}>
                            <Text style={styles.title}>{title}</Text>
                        </ImageBackground>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        borderRadius: 10,
    },
    imgView: {
        height: 170,
        borderRadius: 10

    },
    image: {
        flex: 1,
        justifyContent: 'flex-end',
        borderRadius: 10

    },
    title: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
        backgroundColor: '#000000c0',
        color: '#fff',
        padding: 15,
        opacity: 0.8
    }
})
