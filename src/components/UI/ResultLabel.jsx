import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ResultLabel = ({ children, innerContainerStyle, outerContainerStyle }) => {
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
        width: '100%',
        borderRadius: 20,
        padding: 4,
        marginBottom: 30,
        marginTop: 35,
    },
    innerContainer: {
        borderRadius: 16,
        overflow: 'hidden',
        paddingVertical: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 32,
        color: '#FFFFFF',
        textAlign: 'center',
    },
});

export default ResultLabel;
