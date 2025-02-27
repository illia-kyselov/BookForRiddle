import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import SettingsSVG from '../../assets/icons/SettingsSVG';

const GradientSettingsButton = ({ size = 75 }) => {
    const navigation = useNavigation();

    const handleGoHome = () => {
        navigation.navigate('Settings');
    };

    return (
        <TouchableOpacity
            onPress={handleGoHome}
            style={[styles.buttonContainer, { width: size, height: size }]}
        >
            <LinearGradient
                colors={['#C6A950', '#F2CE62', '#8C7739']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.outerContainer}
            >
                <View style={styles.innerWrapper}>
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
                    <View style={styles.innerContainer}>
                        <SettingsSVG width={40} height={40} />
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {},
    outerContainer: {
        flex: 1,
        borderRadius: 20,
        padding: 4,
    },
    innerWrapper: {
        flex: 1,
        borderRadius: 16,
        overflow: 'hidden',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default GradientSettingsButton;
