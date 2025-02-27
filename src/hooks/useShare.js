import { Share } from 'react-native';

export const useShare = () => {
    const shareMessage = async (message) => {
        try {
            const result = await Share.share({ message });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log('Shared with activity type: ' + result.activityType);
                } else {
                    console.log('Shared successfully');
                }
            } else if (result.action === Share.dismissedAction) {
                console.log('Share dismissed');
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return shareMessage;
};
