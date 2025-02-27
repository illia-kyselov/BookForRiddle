import React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientLabel from '../components/UI/GradientLabel';
import BackButton from '../components/UI/BackButton';
import ArrowReload from '../assets/icons/ArrowReload';
import GradientToggleButton from '../components/UI/GradientToggleButton';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { resetProgress, setVibration, setHint } from '../store/slices/riddlesData';

const SettingsScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const vibrationEnabled = useSelector((state) => state.riddles.vibration);
    const hintCount = useSelector((state) => state.riddles.hint);

    const handleStartOver = () => {
        dispatch(resetProgress());
        navigation.navigate('Main');
    };

    const handleToggleVibration = () => {
        dispatch(setVibration(!vibrationEnabled));
    };

    const handleToggleDisableHint = () => {
        if (hintCount > 0) {
            dispatch(setHint(0));
        } else {
            dispatch(setHint(3));
        }
    };

    return (
        <View style={styles.root}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
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
                    <View style={styles.labelContainer}>
                        <GradientLabel
                            outerContainerStyle={styles.gradientLabelOuter}
                            innerContainerStyle={styles.gradientLabelInner}
                        >
                            SETTINGS
                        </GradientLabel>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={styles.togglesBox}>
                            <View style={styles.toggleRowWithMargin}>
                                <Text style={styles.toggleLabel}>START THE GAME OVER AGAIN</Text>
                                <GradientToggleButton onPress={handleStartOver}>
                                    <ArrowReload />
                                </GradientToggleButton>
                            </View>
                            <View style={styles.toggleRowWithMargin}>
                                <Text style={styles.toggleLabel}>VIBRATION</Text>
                                <GradientToggleButton active={vibrationEnabled} onPress={handleToggleVibration} />
                            </View>
                            <View style={styles.toggleRow}>
                                <Text style={styles.toggleLabel}>DISABLE HINT</Text>
                                <GradientToggleButton active={hintCount === 0} onPress={handleToggleDisableHint} />
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
                <View style={styles.backButtonContainer}>
                    <BackButton onPress={() => navigation.goBack()} />
                </View>
            </ImageBackground>
        </View>
    );
};

export default SettingsScreen;

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
    absoluteFill: {
        ...StyleSheet.absoluteFillObject,
    },
    labelContainer: {
        marginHorizontal: 16,
        marginBottom: 44,
    },
    gradientLabelOuter: {
        width: '100%',
    },
    gradientLabelInner: {
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
    },
    contentContainer: {
        marginHorizontal: 16,
        marginTop: 50,
    },
    togglesBox: {
        backgroundColor: '#9A5310',
        borderRadius: 20,
        paddingLeft: 25,
        paddingRight: 16,
        paddingTop: 46,
        paddingBottom: 40,
    },
    toggleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    toggleRowWithMargin: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    toggleLabel: {
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: 24,
        color: '#FFFFFF',
        flex: 1,
        marginRight: 10,
    },
    backButtonContainer: {
        position: 'absolute',
        bottom: 58,
        alignSelf: 'center',
    },
});
