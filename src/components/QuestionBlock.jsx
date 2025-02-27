import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const QuestionBlock = ({ riddle }) => (
    <View style={styles.questionBlockContainer}>
        <LinearGradient
            colors={['#C6A950', '#F2CE62', '#8C7739']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.questionBlockBorder}
        >
            <View style={styles.questionBlockInner}>
                <LinearGradient colors={['#D9D9D9', '#D9D9D9']} style={StyleSheet.absoluteFill} />
                <LinearGradient
                    colors={['#9A5310', '#341C05']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={StyleSheet.absoluteFill}
                />
                <View style={styles.questionContent}>
                    <Text style={styles.questionBlockTitle}>THINK AND ANSWER!</Text>
                    <View style={styles.whiteLine} />
                    <Text style={styles.questionText}>{riddle.question}</Text>
                </View>
            </View>
        </LinearGradient>
    </View>
);

const styles = StyleSheet.create({
    questionBlockContainer: {
        marginHorizontal: 16,
        marginTop: 20,
    },
    questionBlockBorder: {
        borderRadius: 20,
        padding: 4,
    },
    questionBlockInner: {
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
    },
    questionContent: {
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
    questionBlockTitle: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 24,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 15,
    },
    whiteLine: {
        width: 242,
        height: 1,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        marginBottom: 32,
    },
    questionText: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
    },
});

export default QuestionBlock;
