import React from 'react';
import CircleButton from './CircleButton';
import HomeSVG from '../../assets/icons/HomeSVG';
import { StyleSheet } from 'react-native';

const HomeButton = ({ onPress, containerStyle }) => (
    <CircleButton onPress={onPress} containerStyle={[styles.homeButton, containerStyle]}>
        <HomeSVG />
    </CircleButton>
);

const styles = StyleSheet.create({
    homeButton: {
        width: 75,
        height: 75,
    },
});

export default HomeButton;
