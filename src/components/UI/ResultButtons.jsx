import React from 'react';
import { View, StyleSheet, StyleSheet as RNStyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import HomeButton from './HomeButton';
import ShareButton from './ShareButton';
import GameButton from './GameButton';

const ResultButtons = ({ isCorrect, onNextOrTry, onGoHome, onShare, nextButtonDisabled }) => {
    return (
        <View style={styles.buttonsBlockContainer}>
            <LinearGradient
                colors={['#C6A950', '#F2CE62', '#8C7739']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.buttonsBlockBorder}
            >
                <View style={styles.buttonsBlockInner}>
                    <LinearGradient
                        colors={['#9A5310', '#341C05']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={RNStyleSheet.absoluteFill}
                    />
                    <View style={styles.buttonsBlockContent}>
                        <GameButton
                            text={isCorrect ? 'NEXT LEVEL' : 'TRY AGAIN'}
                            onPress={nextButtonDisabled ? null : onNextOrTry}
                            disabled={nextButtonDisabled}
                            style={[
                                styles.mainActionButton,
                                nextButtonDisabled && styles.disabledButton,
                            ]}
                        />
                        {isCorrect ? (
                            <View style={styles.bottomRow}>
                                <HomeButton
                                    onPress={onGoHome}
                                    containerStyle={styles.homeButtonContainer}
                                />
                                <ShareButton
                                    onPress={onShare}
                                    containerStyle={styles.shareButtonContainer}
                                />
                            </View>
                        ) : (
                            <View style={[styles.bottomRow, styles.centerBottomRow]}>
                                <HomeButton
                                    onPress={onGoHome}
                                    containerStyle={styles.homeButtonContainer}
                                />
                            </View>
                        )}
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonsBlockContainer: {
        width: '100%',
    },
    buttonsBlockBorder: {
        borderRadius: 20,
        padding: 4,
        marginBottom: 20,
    },
    buttonsBlockInner: {
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
        height: 'auto',
    },
    buttonsBlockContent: {
        padding: 36,
        flexDirection: 'column',
        gap: 16,
    },
    mainActionButton: {
        width: '100%',
    },
    disabledButton: {
        opacity: 0.5,
    },
    bottomRow: {
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerBottomRow: {
        justifyContent: 'center',
    },
    shareButtonContainer: {
        borderRadius: 20,
        flex: 1,
    },
    homeButtonContainer: {
        width: 75,
        height: 75,
        borderRadius: 20,
    },
});

export default ResultButtons;
