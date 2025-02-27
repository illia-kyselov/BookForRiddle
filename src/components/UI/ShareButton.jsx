import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircleButton from './CircleButton';
import ShareSVG from '../../assets/icons/ShareSVG';

const ShareButton = ({ onPress, containerStyle }) => (
    <CircleButton onPress={onPress} containerStyle={containerStyle}>
        <View style={styles.shareRow}>
            <ShareSVG />
            <Text style={[styles.shareText, { marginLeft: 18 }]}>SHARE</Text>
        </View>
    </CircleButton>
);

const styles = StyleSheet.create({
    shareRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shareText: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 18,
        color: '#FFFFFF',
    },
});

export default ShareButton;
