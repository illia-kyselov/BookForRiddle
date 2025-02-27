import React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    StatusBar,
    Text,
    TouchableOpacity,
    StyleSheet as RNStyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../components/UI/BackButton';
import GradientLabel from '../components/UI/GradientLabel';
import LightSVG from '../assets/icons/LightSVG';
import { useDispatch } from 'react-redux';
import { setHint } from '../store/slices/riddlesData';

const DailyBonusScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleRemoveHints = () => {
        dispatch(setHint(0));
        navigation.navigate('Main');
    };

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
                    style={RNStyleSheet.absoluteFill}
                />

                <SafeAreaView style={styles.safeContainer}>
                    <View style={styles.labelContainer}>
                        <GradientLabel
                            outerContainerStyle={{ width: '100%' }}
                            innerContainerStyle={{ width: '100%', paddingLeft: 0, paddingRight: 0 }}
                        >
                            DAILY BONUS
                        </GradientLabel>
                    </View>

                    <View style={styles.mainBlockContainer}>
                        <LinearGradient
                            colors={['#C6A950', '#F2CE62', '#8C7739']}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                            style={styles.mainBlockBorder}
                        >
                            <View style={styles.mainBlockInner}>
                                <LinearGradient
                                    colors={['#D9D9D9', '#D9D9D9']}
                                    style={RNStyleSheet.absoluteFill}
                                />
                                <LinearGradient
                                    colors={['#9A5310', '#341C05']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={RNStyleSheet.absoluteFill}
                                />
                                <View style={styles.mainBlockContent}>
                                    <View style={styles.lampBlockContainer}>
                                        <LinearGradient
                                            colors={['#C6A950', '#F2CE62', '#8C7739']}
                                            start={{ x: 0.5, y: 0 }}
                                            end={{ x: 0.5, y: 1 }}
                                            style={styles.lampBlockBorder}
                                        >
                                            <View style={styles.lampBlockInner}>
                                                <LinearGradient
                                                    colors={['#D9D9D9', '#D9D9D9']}
                                                    style={RNStyleSheet.absoluteFill}
                                                />
                                                <LinearGradient
                                                    colors={['#ED6066', '#911415', '#ED6066']}
                                                    start={{ x: 0.5, y: 0 }}
                                                    end={{ x: 0.5, y: 1 }}
                                                    style={RNStyleSheet.absoluteFill}
                                                />
                                                <View style={styles.lampContent}>
                                                    <LightSVG />
                                                    <Text style={styles.hintTitle}>HINT</Text>
                                                    <Text style={styles.hintSubtitle}>
                                                        You can get 3 hints{'\n'}per day
                                                    </Text>
                                                </View>
                                            </View>
                                        </LinearGradient>
                                    </View>

                                    <TouchableOpacity onPress={handleRemoveHints} style={styles.removeButtonContainer}>
                                        <LinearGradient
                                            colors={['#C6A950', '#F2CE62', '#8C7739']}
                                            start={{ x: 0.5, y: 0 }}
                                            end={{ x: 0.5, y: 1 }}
                                            style={styles.removeButtonBorder}
                                        >
                                            <View style={styles.removeButtonInner}>
                                                <LinearGradient
                                                    colors={['#D9D9D9', '#D9D9D9']}
                                                    style={RNStyleSheet.absoluteFill}
                                                />
                                                <LinearGradient
                                                    colors={['#ED6066', '#911415', '#ED6066']}
                                                    start={{ x: 0.5, y: 0 }}
                                                    end={{ x: 0.5, y: 1 }}
                                                    style={RNStyleSheet.absoluteFill}
                                                />
                                                <Text style={styles.removeButtonText}>REMOVE HINTS</Text>
                                            </View>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
                </SafeAreaView>

                <View style={styles.backButtonContainer}>
                    <BackButton onPress={() => navigation.goBack()} />
                </View>
            </ImageBackground>
        </View>
    );
};

export default DailyBonusScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    safeContainer: {
        flex: 1,
    },
    labelContainer: {
        marginHorizontal: 16,
    },
    mainBlockContainer: {
        marginHorizontal: 16,
        marginTop: 35,
        borderRadius: 20,
    },
    mainBlockBorder: {
        borderRadius: 20,
        padding: 4,
    },
    mainBlockInner: {
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
    },
    mainBlockContent: {
        padding: 36,
    },
    lampBlockContainer: {
        height: 304,
        marginBottom: 19,
    },
    lampBlockBorder: {
        flex: 1,
        borderRadius: 20,
        padding: 4,
    },
    lampBlockInner: {
        flex: 1,
        borderRadius: 16,
        overflow: 'hidden',
    },
    lampContent: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    hintTitle: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 36,
        color: '#FFFFFF',
        marginTop: 4,
        marginBottom: 19,
    },
    hintSubtitle: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 24,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    removeButtonContainer: {
        alignItems: 'center',
    },
    removeButtonBorder: {
        width: 232,
        height: 87,
        borderRadius: 20,
        padding: 4,
    },
    removeButtonInner: {
        flex: 1,
        borderRadius: 16,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeButtonText: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 24,
        color: '#FFFFFF',
        zIndex: 2,
    },
    backButtonContainer: {
        position: 'absolute',
        bottom: 58,
        alignSelf: 'center',
    },
});
