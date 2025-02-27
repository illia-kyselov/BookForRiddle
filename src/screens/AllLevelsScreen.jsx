/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet as RNStyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../components/UI/BackButton';
import GradientLabel from '../components/UI/GradientLabel';
import LevelBlock from '../components/LevelBlock';
import MapLine from '../components/MapLine';
import MapContainer from '../components/MapContainer';

const levelBlocks = [
    { id: 1, left: 46, top: 369 },
    { id: 2, left: 145, top: 106 },
    { id: 3, left: 266, top: 233 },
    { id: 4, left: 390, top: 337 },
    { id: 5, left: 405, top: 69 },
    { id: 6, left: 571, top: 96 },
    { id: 7, left: 571, top: 300 },
    { id: 8, left: 752, top: 287 },
    { id: 9, left: 752, top: 122 },
    { id: 10, left: 920, top: 204 },
];

const mapLines = [
    { id: 1, source: require('../assets/icons/map/Line1.png'), left: 81, top: 155, bottom: 110 },
    { id: 2, source: require('../assets/icons/map/Line2.png'), left: 198, top: 154, bottom: 232 },
    { id: 3, source: require('../assets/icons/map/Line3.png'), left: 320, top: 253, bottom: 132 },
    { id: 4, source: require('../assets/icons/map/Line4.png'), left: 405, top: 118, bottom: 116 },
    { id: 5, source: require('../assets/icons/map/Line5.png'), left: 465, top: 106, bottom: 350 },
    { id: 6, source: require('../assets/icons/map/Line6.png'), left: 602, top: 118, bottom: 168 },
    { id: 7, source: require('../assets/icons/map/Line7.png'), left: 620, top: 300, bottom: 112 },
    { id: 8, source: require('../assets/icons/map/Line8.png'), left: 769, top: 114, bottom: 168 },
    { id: 9, source: require('../assets/icons/map/Line9.png'), left: 810, top: 248, bottom: 136 },
];

const AllLevelsScreen = () => {
    const navigation = useNavigation();
    const currentLevel = useSelector((state) => state.riddles.currentLevel);

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
                    style={RNStyleSheet.absoluteFill}
                />
                <SafeAreaView style={styles.safeContainer}>
                    <View style={styles.labelContainer}>
                        <GradientLabel
                            outerContainerStyle={{ width: '100%' }}
                            innerContainerStyle={{ width: '100%', paddingLeft: 0, paddingRight: 0 }}
                        >
                            ALL LEVELS
                        </GradientLabel>
                    </View>
                    <MapContainer>
                        {levelBlocks.map((block) => (
                            <LevelBlock
                                key={block.id}
                                id={block.id}
                                left={block.left}
                                top={block.top}
                                locked={block.id > currentLevel}
                            />
                        ))}
                        {mapLines.map((line) => (
                            <MapLine
                                key={line.id}
                                source={line.source}
                                left={line.left}
                                top={line.top}
                                bottom={line.bottom}
                            />
                        ))}
                    </MapContainer>
                </SafeAreaView>
                <View style={styles.backButtonContainer}>
                    <BackButton onPress={() => navigation.goBack()} />
                </View>
            </ImageBackground>
        </View>
    );
};

export default AllLevelsScreen;

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
        marginBottom: 44,
    },
    backButtonContainer: {
        position: 'absolute',
        bottom: 58,
        alignSelf: 'center',
    },
});
