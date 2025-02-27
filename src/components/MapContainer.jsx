import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MapContainer = ({ children }) => (
    <View style={styles.mapContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <LinearGradient
                colors={['#C6A950', '#F2CE62', '#8C7739']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.borderGradient}
            >
                <View style={styles.innerContainer}>
                    <LinearGradient
                        colors={['#9A5310', '#341C05']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.mapContent}
                    />
                    {children}
                </View>
            </LinearGradient>
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        paddingLeft: 16,
        borderRadius: 20,
        marginBottom: 20,
    },
    borderGradient: {
        borderRadius: 20,
        padding: 4,
    },
    innerContainer: {
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
    },
    mapContent: {
        width: 1050,
        height: 484,
        borderRadius: 16,
    },
});

export default MapContainer;
