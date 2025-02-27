import React from 'react';
import { TouchableOpacity, View, StyleSheet, StyleSheet as RNStyleSheet } from 'react-native';
import LightOffSVG from '../../assets/icons/LightOffSVG';
import LightOnSVG from '../../assets/icons/LightOnSVG';

const LampButton = ({ isLightOn, onPress, containerStyle }) => (
    <TouchableOpacity style={[styles.lampButton, containerStyle]} onPress={onPress}>
        {isLightOn ? (
            <LightOnSVG />
        ) : (
            <View style={styles.lampOffWrapper}>
                <LightOffSVG />
                <View style={styles.lampDarkOverlay} />
            </View>
        )}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    lampButton: {
        position: 'absolute',
        top: 16,
        left: '50%',
        transform: [{ translateX: -25 }],
        zIndex: 25,
    },
    lampOffWrapper: {
        position: 'relative',
    },
    lampDarkOverlay: {
        ...RNStyleSheet.absoluteFillObject,
        backgroundColor: '#000000D9',
        borderRadius: 25,
        zIndex: 1,
    },
});

export default LampButton;
