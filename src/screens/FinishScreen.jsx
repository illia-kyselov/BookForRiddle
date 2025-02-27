import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FinishHeader from '../components/FinishHeader';
import FinishContent from '../components/FinishContent';
import FinishButtonRow from '../components/FinishButtonRow';
import { useShare } from '../hooks/useShare';

const FinishScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const shareMessage = useShare();

    const handleGoHome = () => {
        navigation.navigate('Main');
    };

    return (
        <View style={styles.container}>
            <FinishHeader />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.safeContainer}>
                    <FinishContent />
                </View>
                <FinishButtonRow
                    onHomePress={handleGoHome}
                    onSharePress={() => shareMessage('I successfully finished the game Book for Riddle')}
                    bottomInset={insets.bottom || 0}
                />
            </SafeAreaView>
        </View>
    );
};

export default FinishScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#261910',
    },
    safeContainer: {
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 150,
        zIndex: 20,
    },
});
