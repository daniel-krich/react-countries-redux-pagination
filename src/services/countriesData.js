import axios from 'axios';

export const requestCountriesData = () => {
    return axios.get('https://restcountries.com/v3.1/all').then(res => res.data);
};