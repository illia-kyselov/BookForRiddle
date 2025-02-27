import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';

import FinishScreen from './src/screens/FinishScreen';
import AllLevelsScreen from './src/screens/AllLevelsScreen';
import DailyBonusScreen from './src/screens/DailyBonusScreen';
import GameLevelScreen from './src/screens/GameLevelScreen';
import GameResultScreen from './src/screens/GameResultScreen';
import DailyBonusOneTimeScreen from './src/screens/DailyBonusOneTimeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import BonusLevelScreen from './src/screens/BonusLevelScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import MainScreen from './src/screens/MainScreen';

const Stack = createStackNavigator();

const App = () => {
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkOnboardingStatus = async () => {
            try {
                const onboardingCompleted = await AsyncStorage.getItem('onboardingComplete');
                if (onboardingCompleted === 'true') {
                    setShowOnboarding(false);
                } else {
                    setShowOnboarding(true);
                }
            } catch (error) {
                console.log('Ошибка при получении состояния онбординга', error);
                setShowOnboarding(true);
            } finally {
                setIsLoading(false);
            }
        };

        checkOnboardingStatus();
    }, []);

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {showOnboarding ? (
                    <OnboardingScreen onFinish={() => setShowOnboarding(false)} />
                ) : (
                    <NavigationContainer>
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="Main" component={MainScreen} />
                            <Stack.Screen name="Settings" component={SettingsScreen} />
                            <Stack.Screen name="Bonus" component={BonusLevelScreen} />
                            <Stack.Screen name="Finish" component={FinishScreen} />
                            <Stack.Screen name="Levels" component={AllLevelsScreen} />
                            <Stack.Screen name="Daily" component={DailyBonusScreen} />
                            <Stack.Screen name="DailyClaim" component={DailyBonusOneTimeScreen} />
                            <Stack.Screen name="Game" component={GameLevelScreen} />
                            <Stack.Screen name="GameResult" component={GameResultScreen} />
                        </Stack.Navigator>
                    </NavigationContainer>
                )}
            </PersistGate>
        </Provider>
    );
};

export default App;

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
