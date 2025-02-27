import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, SafeAreaView, StyleSheet as RNStyleSheet } from 'react-native';
import HomeButtonBonus from '../components/UI/HomeButtonBonus';
import LampButton from '../components/UI/LampButton';
import Popup from '../components/UI/Popup';
import BookDisplay from '../components/BookDisplay';
import FinishButton from '../components/UI/FinishButton';

const BonusLevelScreen = ({ navigation }) => {
    const [isLightOn, setIsLightOn] = useState(false);
    const [showPopup, setShowPopup] = useState(true);

    const handleToggleLight = () => {
        setIsLightOn(!isLightOn);
    };

    const handleHomePress = () => {
        navigation.navigate('Main');
    };

    const handleClosePress = () => {
        setShowPopup(false);
    };

    const handleFinishGame = () => {
        navigation.navigate('Finish');
    };

    return (
        <View style={styles.root}>
            <ImageBackground
                source={require('../assets/background/secret.png')}
                style={styles.background}
                imageStyle={styles.bottomCenterImage}
                resizeMode="cover"
            >
                <SafeAreaView style={styles.safeArea}>
                    {!isLightOn && <View style={styles.darkOverlay} />}
                    <HomeButtonBonus onPress={handleHomePress} containerStyle={styles.homeButtonContainer} />
                    <LampButton isLightOn={isLightOn} onPress={handleToggleLight} />
                    {showPopup && (
                        <Popup
                            text={'Behind you are 10 difficult tomes...\nUse your intuition in the right direction!'}
                            onClose={handleClosePress}
                        />
                    )}
                    <BookDisplay isLightOn={isLightOn} />
                    {isLightOn && <FinishButton onPress={handleFinishGame} />}
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default BonusLevelScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#000',
    },
    background: {
        flex: 1,
    },
    bottomCenterImage: {
        resizeMode: 'cover',
        top: -270,
    },
    safeArea: {
        flex: 1,
    },
    darkOverlay: {
        ...RNStyleSheet.absoluteFillObject,
        backgroundColor: '#000000D9',
        zIndex: 25,
    },
    homeButtonContainer: {
        position: 'absolute',
        top: 69,
        left: 16,
        zIndex: 26,
    },
});
