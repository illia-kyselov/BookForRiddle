import React from 'react';
import { Image, StyleSheet } from 'react-native';

const MapLine = ({ source, left, top, bottom }) => {
    const height = 484 - top - bottom;
    return (
        <Image source={source} style={[styles.mapLine, { left, top, height }]} />
    );
};

const styles = StyleSheet.create({
    mapLine: {
        position: 'absolute',
        resizeMode: 'contain',
    },
});

export default MapLine;
