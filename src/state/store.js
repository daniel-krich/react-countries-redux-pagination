import { configureStore } from '@reduxjs/toolkit';
import { countriesReducer } from './countriesReducer';

export const store = configureStore({
    reducer: {
        countries: countriesReducer
    }
});