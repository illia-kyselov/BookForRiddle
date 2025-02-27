import React from 'react';
import { TouchableOpacity, View, StyleSheet, StyleSheet as RNStyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CircleButton = ({ onPress, containerStyle, children }) => (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
        <LinearGradient
            colors={['#C6A950', '#F2CE62', '#8C7739']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.circleButtonBorder}
        >
            <View style={styles.circleButtonInner}>
                <LinearGradient colors={['#D9D9D9', '#D9D9D9']} style={RNStyleSheet.absoluteFill} />
                <LinearGradient
                    colors={['#ED6066', '#911415', '#ED6066']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={RNStyleSheet.absoluteFill}
                />
                {children}
            </View>
        </LinearGradient>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    circleButtonBorder: {
        flex: 1,
        borderRadius: 20,
        padding: 4,
    },
    circleButtonInner: {
        flex: 1,
        borderRadius: 16,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CircleButton;
