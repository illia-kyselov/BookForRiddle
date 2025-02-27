import { useEffect } from 'react';
import { Vibration } from 'react-native';
import { useSelector } from 'react-redux';

const useVibrationOnWrongAnswer = (isCorrect) => {
    const vibrationEnabled = useSelector((state) => state.riddles.vibration);
    useEffect(() => {
        if (vibrationEnabled && isCorrect === false) {
            Vibration.vibrate(500);
        }
    }, [isCorrect, vibrationEnabled]);
};

export default useVibrationOnWrongAnswer;
