import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HintSVG from '../assets/icons/HintSVG';

const HintSection = ({ onGetHint, hintCount, style }) => (
    <View style={[styles.hintButtonRow, style]}>
        <TouchableOpacity style={styles.hintButton} onPress={onGetHint}>
            <LinearGradient
                colors={['#C6A950', '#F2CE62', '#8C7739']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.hintButtonBorder}
            >
                <View style={styles.hintButtonInner}>
                    <LinearGradient colors={['#D9D9D9', '#D9D9D9']} style={StyleSheet.absoluteFill} />
                    <LinearGradient
                        colors={['#ED6066', '#911415', '#ED6066']}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        style={StyleSheet.absoluteFill}
                    />
                    <HintSVG style={styles.hintIcon} />
                    <Text style={styles.hintCount}>{hintCount}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.getHintText}>GET A HINT</Text>
    </View>
);

export default HintSection;

const styles = StyleSheet.create({
    hintButtonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 22,
    },
    hintButton: {
        width: 89,
        height: 89,
        borderRadius: 20,
        marginRight: 12,
    },
    hintButtonBorder: {
        flex: 1,
        borderRadius: 20,
        padding: 4,
    },
    hintButtonInner: {
        flex: 1,
        borderRadius: 16,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    hintIcon: {
        position: 'absolute',
        left: 20,
        bottom: 16,
    },
    hintCount: {
        position: 'absolute',
        top: 10,
        right: 15,
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 24,
        color: '#FFFFFF',
    },
    getHintText: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 24,
        color: '#FFFFFF',
        textTransform: 'uppercase',
    },
});
