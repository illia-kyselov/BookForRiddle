import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, StyleSheet as RNStyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FinishButton = ({ onPress }) => (
    <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.finishButton} onPress={onPress}>
            <LinearGradient
                colors={['#C6A950', '#F2CE62', '#8C7739']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.finishButtonBorder}
            >
                <View style={styles.finishButtonInner}>
                    <LinearGradient colors={['#D9D9D9', '#D9D9D9']} style={RNStyleSheet.absoluteFill} />
                    <LinearGradient
                        colors={['#ED6066', '#911415', '#ED6066']}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        style={RNStyleSheet.absoluteFill}
                    />
                    <Text style={styles.finishButtonText}>FINISH THE GAME</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    bottomContainer: {
        position: 'absolute',
        bottom: 42,
        alignSelf: 'center',
        zIndex: 20,
    },
    finishButtonBorder: {
        borderRadius: 20,
        padding: 4,
    },
    finishButtonInner: {
        width: '100%',
        borderRadius: 16,
        overflow: 'hidden',
        paddingHorizontal: 30,
        paddingVertical: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    finishButtonText: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 32,
        color: '#FFF',
    },
});

export default FinishButton;
