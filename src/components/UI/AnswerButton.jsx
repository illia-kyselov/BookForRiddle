import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AnswerButton = ({ text, correct, onPress, style }) => {
    const correctGradient = ['#2C9A10', '#053412'];
    const defaultGradient = ['#9A5310', '#341C05'];
    const backgroundGradient = correct ? correctGradient : defaultGradient;

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.9}
            style={[styles.answerButtonContainer, style]}
        >
            <LinearGradient
                colors={['#C6A950', '#F2CE62', '#8C7739']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.answerBorderGradient}
            >
                <View style={styles.answerInnerContainer}>
                    <LinearGradient colors={['#D9D9D9', '#D9D9D9']} style={StyleSheet.absoluteFill} />
                    <LinearGradient
                        colors={backgroundGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={StyleSheet.absoluteFill}
                    />
                    <Text style={styles.answerText}>{text}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    answerButtonContainer: {
        width: '48%',
        height: 87,
    },
    answerBorderGradient: {
        flex: 1,
        borderRadius: 20,
        padding: 4,
    },
    answerInnerContainer: {
        flex: 1,
        borderRadius: 16,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    answerText: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 24,
        color: '#FFFFFF',
    },
});

export default AnswerButton;
