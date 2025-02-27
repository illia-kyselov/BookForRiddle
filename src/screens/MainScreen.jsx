import React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientGameButton from '../components/UI/GradientGameButton';
import LinearGradient from 'react-native-linear-gradient';
import GradientSettingsButton from '../components/UI/GradientSettingsButton';
import { useSelector } from 'react-redux';

const MainScreen = () => {
    const navigation = useNavigation();
    const currentLevel = useSelector((state) => state.riddles.currentLevel);

    const startGameText = currentLevel > 1 ? 'CONTINUE' : 'START GAME';

    return (
        <View style={styles.root}>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <View style={styles.header}>
                <ImageBackground
                    source={require('../assets/background/man.png')}
                    style={styles.imageBackground}
                    resizeMode="cover"
                >
                    <View style={styles.shadowOverlay}>
                        <LinearGradient
                            colors={['rgba(14,10,6,0)', '#261910']}
                            style={styles.absoluteFill}
                        />
                    </View>
                    <View style={styles.settingsButtonContainer}>
                        <GradientSettingsButton />
                    </View>
                </ImageBackground>
                <Image
                    source={require('../assets/icons/BookForRiddle.png')}
                    style={styles.bookImage}
                />
            </View>

            <SafeAreaView style={styles.safeContainer}>
                <View style={styles.buttonContainer}>
                    <GradientGameButton
                        variant="red"
                        text={startGameText}
                        onPress={() =>
                            navigation.navigate('Game', { riddleId: currentLevel })
                        }
                    />
                    <GradientGameButton
                        variant="red"
                        text="ALL LEVELS"
                        onPress={() => navigation.navigate('Levels')}
                    />
                    <GradientGameButton
                        variant="red"
                        text="DAILY BONUS"
                        onPress={() => navigation.navigate('DailyClaim')}
                    />
                    <GradientGameButton
                        variant="yellow"
                        text="BONUS LEVEL"
                        onPress={currentLevel >= 10 ? () => navigation.navigate('Bonus') : null}
                        style={currentLevel >= 10 ? styles.bonusEnabled : styles.bonusDisabled}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#261910',
    },
    header: {
        width: '100%',
        height: 400,
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    shadowOverlay: {
        ...StyleSheet.absoluteFillObject,
    },
    absoluteFill: {
        ...StyleSheet.absoluteFillObject,
    },
    settingsButtonContainer: {
        position: 'absolute',
        top: 59,
        right: 16,
    },
    safeContainer: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%',
        paddingHorizontal: 16,
        paddingBottom: 20,
        gap: 16,
    },
    bookImage: {
        position: 'absolute',
        top: 295,
        left: 22,
        right: 22,
        resizeMode: 'contain',
    },
    bonusEnabled: {
        opacity: 1,
    },
    bonusDisabled: {
        opacity: 0.5,
    },
});
