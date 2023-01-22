import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './index.scss';
import App from './App';
import { store } from './state/store';
import { fetchCountries } from './state/countriesSlice';

store.dispatch(fetchCountries());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);