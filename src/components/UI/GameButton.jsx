import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, StyleSheet as RNStyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GameButton = ({ text, onPress, style }) => {
    const verticalGradientColors = ['#ED6066', '#911415', '#ED6066'];

    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, style]}>
            <LinearGradient
                colors={['#C6A950', '#F2CE62', '#8C7739']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.borderGradient}
            >
                <View style={styles.innerContainer}>
                    <LinearGradient colors={['#D9D9D9', '#D9D9D9']} style={RNStyleSheet.absoluteFill} />
                    <LinearGradient
                        colors={verticalGradientColors}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        style={RNStyleSheet.absoluteFill}
                    />
                    <View style={styles.content}>
                        <Text
                            style={styles.contentText}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {text}
                        </Text>
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        height: 87,
    },
    borderGradient: {
        flex: 1,
        borderRadius: 20,
        padding: 4,
    },
    innerContainer: {
        flex: 1,
        borderRadius: 16,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 24,
        color: '#FFFFFF',
    },
});

export default GameButton;
