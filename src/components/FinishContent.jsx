import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FinishContent = () => (
    <View style={styles.gradientBorder}>
        <LinearGradient
            colors={['#C6A950', '#F2CE62', '#8C7739']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.gradientBorderInner}
        >
            <LinearGradient
                colors={['#9A5310', '#341C05']}
                start={{ x: 0.1, y: 0 }}
                end={{ x: 0.9, y: 1 }}
                style={styles.contentContainer}
            >
                <LinearGradient
                    colors={['#ED6066', '#911415', '#ED6066']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={StyleSheet.absoluteFill}
                />
                <View style={styles.innerPadding}>
                    <Text style={styles.title}>
                        YOU HAVE{'\n'}PASSED THE GAME!
                    </Text>
                    <Text style={styles.subTitle}>
                        Share your achievements with your friends and remember:
                    </Text>
                    <Text style={styles.subTitle}>-</Text>
                    <Text style={styles.subTitle}>
                        Every riddle is a door.{'\n'}You just need to find the right key
                    </Text>
                </View>
            </LinearGradient>
        </LinearGradient>
    </View>
);

const styles = StyleSheet.create({
    gradientBorder: {
        paddingHorizontal: 14,
        paddingVertical: 35,
    },
    gradientBorderInner: {
        borderRadius: 20,
        padding: 4,
    },
    contentContainer: {
        borderRadius: 16,
        overflow: 'hidden',
    },
    innerPadding: {
        paddingHorizontal: 14,
        paddingVertical: 35,
    },
    title: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 32,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 40,
    },
    subTitle: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 20,
        lineHeight: 24.2,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 10,
    },
});

export default FinishContent;
