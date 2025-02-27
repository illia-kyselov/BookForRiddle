import React, { useCallback, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import GradientGameButton from '../components/UI/GradientGameButton';

const OnboardingScreen = ({ onFinish }) => {
    const slides = useSelector((state) => state.onboarding.slides);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = useCallback(async () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            try {
                await AsyncStorage.setItem('onboardingComplete', 'true');
                onFinish();
            } catch (error) {
                console.log('Ошибка при сохранении состояния онбординга', error);
            }
        }
    }, [currentIndex, slides, onFinish]);

    const item = slides[currentIndex];

    return (
        <View style={styles.container}>
            <ImageBackground
                source={item.image}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <LinearGradient
                    colors={['rgba(0,0,0,0)', '#000000']}
                    style={styles.gradientOverlay}
                />
            </ImageBackground>

            <SafeAreaView style={styles.content}>
                <View style={styles.bottomContainer}>
                    <View style={styles.textContainer}>
                        {item.mainTitle && (
                            <Text style={styles.welcomeText}>{item.mainTitle}</Text>
                        )}

                        {item.title && (
                            <MaskedView
                                style={styles.maskedView}
                                maskElement={
                                    <Text style={styles.titleText}>
                                        {item.title}
                                    </Text>
                                }
                            >
                                <LinearGradient
                                    colors={['#ED6066', '#911415', '#ED6066']}
                                    locations={[0, 0.465, 1]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 0, y: 1 }}
                                    style={styles.gradientTextFill}
                                >
                                    <Text style={[styles.titleText, styles.hiddenText]}>
                                        {item.title}
                                    </Text>
                                </LinearGradient>
                            </MaskedView>
                        )}

                        {item.text && (
                            <Text style={styles.subText}>{item.text}</Text>
                        )}
                    </View>

                    <GradientGameButton
                        variant="red"
                        text={currentIndex === 0 ? 'CONTINUE' : 'NEXT'}
                        onPress={handleNext}
                        style={styles.button}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    imageBackground: {
        ...StyleSheet.absoluteFillObject,
    },
    gradientOverlay: {
        ...StyleSheet.absoluteFillObject,
    },
    content: {
        flex: 1,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        marginBottom: 50,
    },
    textContainer: {
        marginBottom: 16,
        alignItems: 'flex-start',
    },
    welcomeText: {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: 32,
        color: '#FFFFFF',
        marginBottom: 6,
    },
    maskedView: {
        alignSelf: 'flex-start',
        marginBottom: 6,
    },
    titleText: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 40.24,
        lineHeight: 44,
        textTransform: 'uppercase',
        color: 'black',
    },
    gradientTextFill: {
        alignSelf: 'flex-start',
    },
    subText: {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 30,
    },
    hiddenText: {
        opacity: 0,
    },
});
