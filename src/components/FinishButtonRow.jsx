import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeButton from './UI/HomeButton';
import ShareButton from './UI/ShareButton';

const FinishButtonRow = ({ onHomePress, onSharePress, bottomInset }) => (
    <View style={[styles.buttonRowContainer, { bottom: bottomInset + 44 }]}>
        <View style={styles.buttonRow}>
            <HomeButton onPress={onHomePress} containerStyle={styles.circleButtonHome} />
            <ShareButton onPress={onSharePress} containerStyle={styles.circleButtonShare} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    buttonRowContainer: {
        position: 'absolute',
        left: 16,
        right: 16,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    circleButtonHome: {
        width: 75,
        height: 75,
        borderRadius: 20,
    },
    circleButtonShare: {
        width: 192,
        height: 75,
        borderRadius: 20,
    },
});

export default FinishButtonRow;
