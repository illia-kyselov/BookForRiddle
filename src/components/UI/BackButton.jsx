import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ArrowBackSVG from '../../assets/icons/ArrowBackSVG';

const BackButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <LinearGradient
                colors={['#C6A950', '#F2CE62', '#8C7739']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.borderGradient}
            >
                <View style={styles.innerContainer}>
                    <LinearGradient
                        colors={['#D9D9D9', '#D9D9D9']}
                        style={StyleSheet.absoluteFill}
                    />
                    <LinearGradient
                        colors={['#ED6066', '#911415', '#ED6066']}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        style={StyleSheet.absoluteFill}
                    />
                    <View style={styles.content}>
                        <ArrowBackSVG />
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 75,
        height: 75,
    },
    borderGradient: {
        flex: 1,
        borderRadius: 20,
        padding: 4,
    },
    innerContainer: {
        flex: 1,
        borderRadius: 16,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BackButton;
