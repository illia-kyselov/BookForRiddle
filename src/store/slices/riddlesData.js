import { createSlice } from '@reduxjs/toolkit';

const initialRiddles = [
    {
        id: 1,
        level: 1,
        category: 'Easy Riddles',
        question: 'What can you see with your eyes closed?',
        answers: [
            { text: 'APPLE', isCorrect: false },
            { text: 'DREAM', isCorrect: true },
            { text: 'PHONE', isCorrect: false },
            { text: 'NOTHING', isCorrect: false },
        ],
    },
    {
        id: 2,
        level: 2,
        category: 'Logic Riddles',
        question: 'What can be filled, but it does not hold anything?',
        answers: [
            { text: 'Bottle', isCorrect: false },
            { text: 'Pocket', isCorrect: false },
            { text: 'Sieve', isCorrect: true },
            { text: 'Glass', isCorrect: false },
        ],
    },
    {
        id: 3,
        level: 3,
        category: 'Number Riddles',
        question: '10+10*0=?',
        answers: [
            { text: '0', isCorrect: false },
            { text: '10', isCorrect: true },
            { text: '20', isCorrect: false },
            { text: '100', isCorrect: false },
        ],
    },
    {
        id: 4,
        level: 4,
        category: 'Riddles for intelligence',
        question: 'Which is heavier: 1 kg of iron or 1 kg of feathers?',
        answers: [
            { text: 'Iron', isCorrect: false },
            { text: 'Feathers', isCorrect: false },
            { text: 'The same', isCorrect: true },
            { text: "I don't know", isCorrect: false },
        ],
    },
    {
        id: 5,
        level: 5,
        category: 'Logic and Analysis',
        question: 'What always increases but never decreases?',
        answers: [
            { text: 'Time', isCorrect: false },
            { text: 'Age', isCorrect: true },
            { text: 'Temperature', isCorrect: false },
            { text: 'Money', isCorrect: false },
        ],
    },
    {
        id: 6,
        level: 6,
        category: 'Quick Riddles',
        question: 'Which word becomes shorter when you add another letter to it?',
        answers: [
            { text: 'Big', isCorrect: false },
            { text: 'Short', isCorrect: true },
            { text: 'Small', isCorrect: false },
            { text: 'Long', isCorrect: false },
        ],
    },
    {
        id: 7,
        level: 7,
        category: 'Observation Riddles',
        question: 'How many paws do three cats have?',
        answers: [
            { text: '8', isCorrect: false },
            { text: '12', isCorrect: true },
            { text: '6', isCorrect: false },
            { text: '16', isCorrect: false },
        ],
    },
    {
        id: 8,
        level: 8,
        category: 'Logic Riddles',
        question: 'What is always in front of you, but you can never see it?',
        answers: [
            { text: 'Sun', isCorrect: false },
            { text: 'Future', isCorrect: true },
            { text: 'Shadow', isCorrect: false },
            { text: 'Wind', isCorrect: false },
        ],
    },
    {
        id: 9,
        level: 9,
        category: 'Arithmetic Riddles',
        question: '5+5*5=?',
        answers: [
            { text: '30', isCorrect: true },
            { text: '50', isCorrect: false },
            { text: '25', isCorrect: false },
            { text: '35', isCorrect: false },
        ],
    },
    {
        id: 10,
        level: 10,
        category: 'Final Riddle',
        question: 'What has a neck but no head?',
        answers: [
            { text: 'Jug', isCorrect: true },
            { text: 'Doll', isCorrect: false },
            { text: 'Clock', isCorrect: false },
            { text: 'Candle', isCorrect: false },
        ],
    },
];

const initialState = {
    riddles: initialRiddles,
    loading: false,
    error: null,
    currentLevel: 1,
    hint: 0,
    vibration: true,
};

const riddlesSlice = createSlice({
    name: 'riddles',
    initialState,
    reducers: {
        fetchRiddles: (state) => {
            state.riddles = initialRiddles;
        },
        setCurrentLevel: (state, action) => {
            state.currentLevel = action.payload;
        },
        setHint: (state, action) => {
            state.hint = action.payload;
        },
        setVibration: (state, action) => {
            state.vibration = action.payload;
        },
        resetProgress: (state) => {
            state.currentLevel = 1;
        },
    },
});

export const { fetchRiddles, setCurrentLevel, setHint, setVibration, resetProgress } = riddlesSlice.actions;
export default riddlesSlice.reducer;
