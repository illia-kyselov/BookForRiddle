import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadOnboardingStatus = createAsyncThunk(
    'onboarding/loadStatus',
    async (_, { rejectWithValue }) => {
        try {
            const value = await AsyncStorage.getItem('onboardingComplete');
            return value === 'true';
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const initialState = {
    hasOnboarded: false,
    slides: [
        {
            key: '1',
            mainTitle: 'WELCOME TO',
            title: 'BOOK FOR RIDDLE',
            text: 'GET READY FOR EXCITING RIDDLES\nAND PUZZLES!',
            image: require('../../assets/background/2.png'),
        },
        {
            key: '2',
            title: 'RULES',
            text: 'ANSWER RIDDLES, USE HINTS AND COMPLETE LEVELS!',
            image: require('../../assets/background/1.png'),
        },
        {
            key: '3',
            title: 'READY TO START?',
            text: 'CLICK THE BUTTON AND TEST YOUR KNOWLEDGE AND INTUITION!',
            image: require('../../assets/background/3.png'),
        },
    ],
    loading: true,
};

const onboardingSlice = createSlice({
    name: 'onboarding',
    initialState,
    reducers: {
        setHasOnboarded: (state, action) => {
            state.hasOnboarded = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadOnboardingStatus.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadOnboardingStatus.fulfilled, (state, action) => {
            state.hasOnboarded = action.payload;
            state.loading = false;
        });
        builder.addCase(loadOnboardingStatus.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const { setHasOnboarded } = onboardingSlice.actions;
export default onboardingSlice.reducer;
