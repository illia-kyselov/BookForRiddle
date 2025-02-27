import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setHint } from '../store/slices/riddlesData';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import HomeButton from '../components/UI/HomeButton';
import LightMediumSVG from '../assets/icons/LightMediumSVG';

const DailyBonusOneTimeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const hintCount = useSelector((state) => state.riddles.hint);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkDailyBonus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const checkDailyBonus = async () => {
        try {
            const lastClaimDate = await AsyncStorage.getItem('lastDailyClaimDate');
            const today = new Date().toDateString();

            if (lastClaimDate === today) {
                navigation.replace('Daily');
            } else {
                dispatch(setHint(3));
                await AsyncStorage.setItem('lastDailyClaimDate', today);
                setLoading(false);
            }
        } catch (err) {
            console.log('Ошибка при чтении даты бонуса:', err);
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Загрузка...</Text>
            </View>
        );
    }

    return (
        <View style={styles.root}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <ImageBackground
                source={require('../assets/background/1.png')}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <LinearGradient
                    colors={['rgba(0,0,0,0)', '#000000']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={styles.absoluteFill}
                />
                <SafeAreaView style={styles.safeContainer}>
                    <View style={styles.mainContainer}>
                        <LinearGradient
                            colors={['#C6A950', '#F2CE62', '#8C7739']}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                            style={styles.borderGradient}
                        >
                            <View style={styles.borderInner}>
                                <View style={styles.doubleGradientWrapper}>
                                    <LinearGradient
                                        colors={['#9A5310', '#341C05']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        style={styles.absoluteFill}
                                    />
                                    <LinearGradient
                                        colors={['#ED6066', '#911415', '#ED6066']}
                                        start={{ x: 0.5, y: 0 }}
                                        end={{ x: 0.5, y: 1 }}
                                        style={styles.absoluteFill}
                                    />
                                </View>

                                <View style={styles.content}>
                                    <LightMediumSVG style={styles.lampIcon} />
                                    <Text style={styles.bigTitle}>
                                        YOU HAVE TAKEN{'\n'}THE DAILY BONUS
                                    </Text>
                                    <View style={styles.whiteLine} />
                                    <Text style={styles.smallTitle}>
                                        YOU NOW HAVE {hintCount} CLUES
                                    </Text>
                                </View>
                            </View>
                        </LinearGradient>

                        <View style={styles.homeButtonWrapper}>
                            <HomeButton onPress={() => navigation.navigate('Main')} />
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default DailyBonusOneTimeScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
    },
    safeContainer: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        color: '#FFF',
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    borderGradient: {
        borderRadius: 20,
        padding: 4,
    },
    borderInner: {
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
    },
    doubleGradientWrapper: {
        ...StyleSheet.absoluteFillObject,
    },
    absoluteFill: {
        ...StyleSheet.absoluteFillObject,
    },
    content: {
        paddingVertical: 45,
        paddingHorizontal: 18,
        alignItems: 'center',
    },
    lampIcon: {
        marginBottom: 25,
    },
    bigTitle: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 32,
        color: '#FFFFFF',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: 24,
    },
    whiteLine: {
        width: 242,
        height: 1,
        backgroundColor: '#FFFFFF',
        marginBottom: 42,
    },
    smallTitle: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 24,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    homeButtonWrapper: {
        marginTop: 30,
    },
});
