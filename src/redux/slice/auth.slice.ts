import { createSlice } from '@reduxjs/toolkit';
import { login } from '../services/auth-thunk';

export interface RootObject {
    token: string;
    isAuthenticated: boolean;
    isError: boolean;
}

const initialState: RootObject = {
    token: '',
    isAuthenticated: false,
    isError: false,
};

export const authslice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        autoLogin: (state) => {
            if (localStorage.getItem('token')) {
                state.token = localStorage.getItem('token') || '';
                state.isAuthenticated = true;
            } else {
                state.token = '';
                state.isAuthenticated = false;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.token = payload?.token;
            state.isAuthenticated = true;
        });
        builder.addCase(login.rejected, (state) => {
            state.isError = true;
        });
    },
});

export const { autoLogin } = authslice.actions;

export default authslice.reducer;
