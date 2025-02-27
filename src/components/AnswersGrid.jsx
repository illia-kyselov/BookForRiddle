import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnswerButton from '../components/UI/AnswerButton';

const AnswersGrid = ({ answers, answerRevealed, selectedAnswer, onSelectAnswer }) => (
    <View style={styles.answersGrid}>
        {answers.map((ans) => {
            const showCorrect = answerRevealed && ans.isCorrect;
            const opacityValue = selectedAnswer
                ? selectedAnswer.text === ans.text ? 1 : 0.5
                : 1;
            return (
                <AnswerButton
                    key={ans.text}
                    text={ans.text}
                    correct={showCorrect}
                    onPress={() => onSelectAnswer(ans)}
                    style={{ opacity: opacityValue }}
                />
            );
        })}
    </View>
);

const styles = StyleSheet.create({
    answersGrid: {
        marginTop: 20,
        marginHorizontal: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 16,
    },
});

export default AnswersGrid;
