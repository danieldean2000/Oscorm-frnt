import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlice';
import blogReducer from './blog';

export const makeStore = () => {
    return configureStore({
        reducer: {
            example: exampleReducer,
            blog: blogReducer,
            // Add more reducers here as needed
        },
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
