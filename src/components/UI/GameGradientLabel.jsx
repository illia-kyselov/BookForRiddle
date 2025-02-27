import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GameGradientLabel = ({ children, innerContainerStyle, outerContainerStyle }) => {
    return (
        <LinearGradient
            colors={['#C6A950', '#F2CE62', '#8C7739']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={[styles.outerContainer, outerContainerStyle]}
        >
            <View style={[styles.innerContainer, innerContainerStyle]}>
                <LinearGradient
                    colors={['#D9D9D9', '#D9D9D9']}
                    style={StyleSheet.absoluteFill}
                />
                <LinearGradient
                    colors={['#ED6066', '#911415', '#ED6066']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={StyleSheet.absoluteFill}
                />
                <Text style={styles.text}>{children}</Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 20,
        padding: 4,
        alignSelf: 'center',
        marginBottom: 30,
        marginTop: 35,
        height: 75,
        flex: 1,
    },
    innerContainer: {
        borderRadius: 16,
        overflow: 'hidden',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    text: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
    },
});

export default GameGradientLabel;
