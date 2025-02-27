import React, { useState } from 'react';
import {
    View,
    ImageBackground,
    StatusBar,
    StyleSheet,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../components/UI/BackButton';
import GameGradientLabel from '../components/UI/GameGradientLabel';
import QuestionBlock from '../components/QuestionBlock';
import AnswersGrid from '../components/AnswersGrid';
import HintSection from '../components/HintSection';
import GameButton from '../components/UI/GameButton';
import { setHint } from '../store/slices/riddlesData';

const GameLevelScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const { riddleId = 1 } = route.params || {};

    const riddles = useSelector((state) => state.riddles.riddles);
    const riddle = riddles.find((r) => r.id === riddleId) || riddles[0];

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answerRevealed, setAnswerRevealed] = useState(false);
    const hintCount = useSelector((state) => state.riddles.hint);

    const handleSelectAnswer = (answer) => {
        setSelectedAnswer(answer);
        setAnswerRevealed(false);
    };

    const handleCheckAnswer = () => {
        if (!selectedAnswer) {return;}

        const correctAnswer = riddle.answers.find(a => a.isCorrect);
        const isCorrect = selectedAnswer.isCorrect;

        navigation.navigate('GameResult', {
            level: riddle.level,
            correctAnswer: correctAnswer.text,
            isCorrect,
        });
    };

    const handleGetHint = () => {
        if (hintCount > 0) {
            setAnswerRevealed(true);
            dispatch(setHint(hintCount - 1));
        }
    };

    return (
        <View style={styles.root}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <ImageBackground
                source={require('../assets/background/3.png')}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <LinearGradient
                    colors={['rgba(0,0,0,0)', '#000000']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={styles.absoluteFill}
                />
                <SafeAreaView style={styles.safeContainer}>
                    <View style={styles.topRow}>
                        <BackButton onPress={() => navigation.navigate('Main')} />
                        <GameGradientLabel
                            innerContainerStyle={styles.labelInner}
                            outerContainerStyle={styles.labelOuter}
                        >
                            {`LEVEL ${riddle.level} – ${riddle.category.toUpperCase()}`}
                        </GameGradientLabel>
                    </View>

                    <QuestionBlock riddle={riddle} />

                    <AnswersGrid
                        answers={riddle.answers}
                        answerRevealed={answerRevealed}
                        selectedAnswer={selectedAnswer}
                        onSelectAnswer={handleSelectAnswer}
                    />

                    <HintSection
                        onGetHint={hintCount > 0 ? handleGetHint : null}
                        hintCount={hintCount}
                        style={hintCount > 0 ? styles.hintEnabled : styles.hintDisabled}
                    />

                    <View style={styles.checkButtonContainer}>
                        <GameButton
                            text="FIND OUT THE ANSWER!"
                            onPress={handleCheckAnswer}
                            style={!selectedAnswer ? styles.gameButtonDisabled : null}
                        />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default GameLevelScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    safeContainer: {
        flex: 1,
    },
    absoluteFill: {
        ...StyleSheet.absoluteFillObject,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 75,
        marginTop: 34,
        marginHorizontal: 16,
        gap: 9,
    },
    labelOuter: {
        marginBottom: 0,
        marginTop: 0,
    },
    labelInner: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    checkButtonContainer: {
        marginHorizontal: 16,
        marginBottom: 20,
    },
    hintEnabled: {
        opacity: 1,
    },
    hintDisabled: {
        opacity: 0.5,
    },
    gameButtonDisabled: {
        opacity: 0.5,
    },
});
