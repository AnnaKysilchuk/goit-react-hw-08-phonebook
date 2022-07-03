import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post(`${BASE_URL}/users/signup`, credentials);

        token.set(data.token);
        return data;
    } catch (error) {
        Notify.failure('Something went wrong:/ Try again;)');
    }
});

export const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post(`${BASE_URL}/users/login`, credentials);

        token.set(data.token);
        return data;
    } catch (error) {
        Notify.failure('Login failed:0 Try again;)');
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post(`${BASE_URL}/users/logout`);

        token.unset();
    } catch (error) {
        Notify.failure('Something went wrong:( Try again;)');
    }
});

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, { getState, rejectWithValue }) => {
        const state = getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return rejectWithValue();
        }

        token.set(persistedToken);
        try {
            const { data } = await axios.get(`${BASE_URL}/users/current`);
            return data;
        } catch (error) {
            Notify.failure('Something went wrong:( Try again;)');
        }
    },
);
