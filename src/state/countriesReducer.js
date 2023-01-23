import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { requestCountriesData } from '../services/countriesData';

const initState = {
    data: [],
    loading: false,
    error: ''
};

export const fetchCountries = createAsyncThunk('countries/fetchCountries', () =>
    requestCountriesData().then(countries => countries.map(country => ({
        flag: country.flags.png,
        name: country.name.common,
        population: country.population
    })))
);

const countriesSlice = createSlice({
    name: 'countries',
    initialState: initState,
    extraReducers: builder => {
        builder.addCase(fetchCountries.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchCountries.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchCountries.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const countriesReducer = countriesSlice.reducer;