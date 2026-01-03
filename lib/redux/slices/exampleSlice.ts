import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface ExampleState {
    value: number;
}

// Define the initial state using that type
const initialState: ExampleState = {
    value: 0,
};

export const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = exampleSlice.actions;

// Selectors
export const selectCount = (state: RootState) => state.example.value;

export default exampleSlice.reducer;
