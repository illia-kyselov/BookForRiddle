import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LockSVG from '../assets/icons/LockSVG';

const LevelBlock = ({ id, left, top, locked, onPress }) => {
    const bgColorsUnlocked = {
        base: ['#D9D9D9', '#D9D9D9'],
        overlay: ['#ED6066', '#911415', '#ED6066'],
    };
    const bgColorsLocked = {
        base: ['#D9D9D9', '#D9D9D9'],
        overlay: ['#E3BFC1', '#373737', '#E3BFC1'],
    };

    const bgColors = locked ? bgColorsLocked : bgColorsUnlocked;

    const content = (
        <View style={[styles.levelBlock, { left, top }]}>
            <LinearGradient
                colors={['#C6A950', '#F2CE62', '#8C7739']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.levelBorderGradient}
            >
                <View style={styles.levelInner}>
                    <LinearGradient colors={bgColors.base} style={StyleSheet.absoluteFill} />
                    <LinearGradient
                        colors={bgColors.overlay}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        style={StyleSheet.absoluteFill}
                    />
                    {locked ? (
                        <View style={styles.lockContainer}>
                            <LockSVG />
                        </View>
                    ) : (
                        <Text style={styles.levelText}>{id}</Text>
                    )}
                </View>
            </LinearGradient>
        </View>
    );

    if (onPress && !locked) {
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
                {content}
            </TouchableOpacity>
        );
    }

    return content;
};

const styles = StyleSheet.create({
    levelBlock: {
        position: 'absolute',
        width: 75,
        height: 75,
        zIndex: 10,
    },
    levelBorderGradient: {
        flex: 1,
        borderRadius: 20,
        padding: 4,
    },
    levelInner: {
        flex: 1,
        borderRadius: 16,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lockContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    levelText: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 32,
        color: '#FFFFFF',
    },
});

export default LevelBlock;
