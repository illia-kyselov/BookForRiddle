import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    StyleSheet as RNStyleSheet,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import { useShare } from '../hooks/useShare';
import AnswerButton from '../components/UI/AnswerButton';
import ResultButtons from '../components/UI/ResultButtons';
import ResultLabel from '../components/UI/ResultLabel';
import { setCurrentLevel } from '../store/slices/riddlesData';
import useVibrationOnWrongAnswer from '../hooks/useVibrationOnWrongAnswer';

const GameResultScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { level, correctAnswer, isCorrect } = route.params || {};
    const dispatch = useDispatch();
    const shareMessage = useShare();
    const maxLevel = 10;
    const isNextLevelAvailable = isCorrect && level < maxLevel;

    useVibrationOnWrongAnswer(isCorrect);

    const handleShare = () => {
        shareMessage(
            `I have ${isCorrect ? 'passed' : 'failed'} level ${level}!\nCorrect answer: ${correctAnswer}`
        );
    };

    const handleNextOrTry = () => {
        if (!isCorrect) {
            navigation.replace('Game', { riddleId: level });
        } else if (level < maxLevel) {
            dispatch(setCurrentLevel(level + 1));
            navigation.replace('Game', { riddleId: level + 1 });
        }
    };

    const handleGoHome = () => {
        if (isCorrect) {
            dispatch(setCurrentLevel(level + 1));
        }
        navigation.navigate('Main');
    };

    return (
        <View style={styles.root}>
            <ImageBackground
                source={require('../assets/background/3.png')}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <LinearGradient
                    colors={['rgba(0,0,0,0)', '#000000']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={RNStyleSheet.absoluteFill}
                />

                <SafeAreaView style={styles.safeContainer}>
                    <ResultLabel
                        outerContainerStyle={styles.gradientLabelOuter}
                        innerContainerStyle={styles.gradientLabelInner}
                    >
                        {`${level} LEVEL ${isCorrect ? 'PASSED' : 'NOT PASSED'}`}
                    </ResultLabel>

                    <LinearGradient
                        colors={['#C6A950', '#F2CE62', '#8C7739']}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        style={styles.resultContentBorderContainer}
                    >
                        <View style={styles.resultContentBorderInner}>
                            {isCorrect ? (
                                <LinearGradient
                                    colors={['#9A5310', '#341C05']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={StyleSheet.absoluteFill}
                                />
                            ) : (
                                <>
                                    <LinearGradient
                                        colors={['#9A5310', '#341C05']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        style={StyleSheet.absoluteFill}
                                    />
                                    <LinearGradient
                                        colors={['#ED6066', '#911415', '#ED6066']}
                                        start={{ x: 0.5, y: 0 }}
                                        end={{ x: 0.5, y: 1 }}
                                        style={StyleSheet.absoluteFill}
                                    />
                                </>
                            )}
                            <View style={styles.resultContent}>
                                <Text style={styles.resultTitle}>
                                    {isCorrect ? "THAT'S RIGHT!" : 'NOT RIGHT!'}
                                </Text>
                                <View style={styles.whiteBorder} />
                                <Text style={styles.correctLabel}>CORRECT ANSWER:</Text>
                                <View style={styles.greenAnswerContainer}>
                                    <AnswerButton
                                        text={correctAnswer?.toUpperCase()}
                                        correct={true}
                                        onPress={() => { }}
                                        style={styles.greenAnswerButton}
                                    />
                                </View>
                            </View>
                        </View>
                    </LinearGradient>

                    <ResultButtons
                        isCorrect={isCorrect}
                        onNextOrTry={isNextLevelAvailable ? handleNextOrTry : null}
                        onGoHome={handleGoHome}
                        onShare={handleShare}
                        nextButtonDisabled={!isNextLevelAvailable}
                    />
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default GameResultScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
    },
    safeContainer: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 16,
    },
    gradientLabelOuter: {
        width: '100%',
        marginBottom: 30,
    },
    gradientLabelInner: {
        paddingVertical: 16,
    },
    resultContentBorderContainer: {
        width: '100%',
        borderRadius: 16,
        padding: 4,
        marginBottom: 28,
    },
    resultContentBorderInner: {
        borderRadius: 12,
        overflow: 'hidden',
    },
    resultContent: {
        alignItems: 'center',
        paddingTop: 60,
        paddingBottom: 42,
    },
    resultTitle: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 40,
        color: '#FFF',
        marginBottom: 15,
    },
    whiteBorder: {
        width: 242,
        height: 1,
        backgroundColor: '#FFFFFF',
        marginBottom: 28,
    },
    correctLabel: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 24,
        color: '#FFF',
        marginBottom: 19,
    },
    greenAnswerContainer: {
        width: '100%',
        alignItems: 'center',
    },
    greenAnswerButton: {
        width: 242,
    },
});
