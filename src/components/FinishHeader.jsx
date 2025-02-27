import React from 'react';
import { View, ImageBackground, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FinishHeader = () => (
    <View style={styles.header}>
        <ImageBackground
            source={require('../assets/background/man.png')}
            style={styles.imageBackground}
            resizeMode="cover"
        >
            <View style={styles.shadowOverlay}>
                <LinearGradient
                    colors={['rgba(14,10,6,0)', '#261910']}
                    style={StyleSheet.absoluteFill}
                />
            </View>
        </ImageBackground>
        <Image
            source={require('../assets/icons/BookForRiddle.png')}
            style={styles.bookImage}
        />
    </View>
);

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 400,
    },
    imageBackground: {
        flex: 1,
    },
    shadowOverlay: {
        ...StyleSheet.absoluteFillObject,
    },
    bookImage: {
        position: 'absolute',
        top: 280,
        left: 22,
        right: 22,
        resizeMode: 'contain',
    },
});

export default FinishHeader;
