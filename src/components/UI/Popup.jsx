import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StyleSheet as RNStyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CloseSVG from '../../assets/icons/CloseSVG';

const Popup = ({ text, onClose }) => (
    <View style={styles.popupContainer}>
        <View style={styles.popupGradients}>
            <LinearGradient
                colors={['#C6A950', '#F2CE62', '#8C7739']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.popupBorder}
            >
                <LinearGradient
                    colors={['#9A5310', '#341C05']}
                    start={{ x: 0, y: 0.2 }}
                    end={{ x: 1, y: 0.8 }}
                    style={styles.popupInner}
                >
                    <Text style={styles.popupText}>{text}</Text>
                </LinearGradient>
            </LinearGradient>
        </View>
        <TouchableOpacity style={styles.closeButtonContainer} onPress={onClose}>
            <LinearGradient
                colors={['#C6A950', '#F2CE62', '#8C7739']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.closeButtonBorder}
            >
                <View style={styles.closeButtonInner}>
                    <LinearGradient colors={['#D9D9D9', '#D9D9D9']} style={RNStyleSheet.absoluteFill} />
                    <LinearGradient
                        colors={['#ED6066', '#911415', '#ED6066']}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        style={RNStyleSheet.absoluteFill}
                    />
                    <CloseSVG width={29} height={29} />
                </View>
            </LinearGradient>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    popupContainer: {
        marginTop: 129,
        marginHorizontal: 16,
        position: 'relative',
        zIndex: 26,
    },
    popupGradients: {},
    popupBorder: {
        borderRadius: 20,
        padding: 4,
    },
    popupInner: {
        borderRadius: 16,
        padding: 24,
    },
    popupText: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 17,
        lineHeight: 20.57,
        color: '#FFFFFF',
        textAlign: 'left',
    },
    closeButtonContainer: {
        position: 'absolute',
        top: -24.5,
        right: -10,
        zIndex: 100,
    },
    closeButtonBorder: {
        width: 49,
        height: 49,
        borderRadius: 24.5,
        padding: 4,
    },
    closeButtonInner: {
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Popup;
