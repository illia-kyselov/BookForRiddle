import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

const BookDisplay = ({ isLightOn }) => {
    const bookSource = isLightOn
        ? require('../assets/icons/Book2PNG.png')
        : require('../assets/icons/BookPNG.png');

    return (
        <View style={styles.bookContainer}>
            <ImageBackground source={bookSource} style={styles.bookImage} resizeMode="contain">
                {isLightOn && (
                    <>
                        <Text style={styles.leftPageText}>
                            The shadow hides the truth, but it is always there.
                        </Text>
                        <Text style={styles.rightPageText}>
                            You know more than you think.
                        </Text>
                    </>
                )}
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    bookContainer: {
        position: 'absolute',
        bottom: 179,
        left: 26,
        right: 26,
        alignItems: 'center',
        zIndex: 15,
    },
    bookImage: {
        width: '100%',
        height: 200,
    },
    leftPageText: {
        position: 'absolute',
        left: 60,
        top: '20%',
        transform: [{ translateY: -8 }],
        fontFamily: 'Nerko One',
        fontWeight: '400',
        fontSize: 16,
        color: '#2E2E2E',
        textAlign: 'left',
        width: 119,
    },
    rightPageText: {
        position: 'absolute',
        right: 50,
        top: '45%',
        transform: [{ translateY: -8 }],
        fontFamily: 'Nerko One',
        fontWeight: '400',
        fontSize: 16,
        color: '#2E2E2E',
        textAlign: 'left',
        width: 119,
    },
});

export default BookDisplay;
