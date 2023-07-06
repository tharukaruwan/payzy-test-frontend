'use client'

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import statusCodes from '@/util/StatusCodes';

const userSlice = createSlice({
    name: 'user',
    initialState: { 
        data: {},
        token: '',
        isLogin: false,
        msg: [],
        status: 'idle'
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(getUser.pending, (state,action) => {
            state.status = statusCodes.LOADING;
            state.msg = [];
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = statusCodes.IDLE;
            state.msg = [];
        })
        .addCase(getUser.rejected, (state, action) => {
            state.status = statusCodes.ERROR;
            state.msg = ["error msg"];
        })
        .addCase(loginUser.pending, (state,action) => {
            state.status = statusCodes.LOADING;
            state.msg = [];
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.data = action.payload.user;
            state.token = action.payload.accessToken;
            state.isLogin = true;
            state.status = statusCodes.IDLE;
            state.msg = [];
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.status = statusCodes.ERROR;
            state.msg = ["Login failed! Please try again.."];
        })
        .addCase(logoutUser.pending, (state,action) => {
            state.status = statusCodes.LOADING;
            state.msg = [];
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.data = {};
            state.token = '';
            state.isLogin = false;
            state.status = statusCodes.IDLE;
            state.msg = [];
        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.status = statusCodes.ERROR;
            state.msg = ["logout error!"];
        })
    }
});

export default userSlice.reducer;

export const getUser = createAsyncThunk('user/get', async (userId) => {
    const res = await axios.get(`http://localhost:3001/users/${userId}`);
    return res.data;
});

export const loginUser = createAsyncThunk('user/login', async (body) => {
    const res = await axios.post('http://localhost:3001/users/login', body);
    return res.data;
});

export const logoutUser = createAsyncThunk('user/logout', async () => {
    const res = await axios.get('http://localhost:3001/helth');
    return res.data;
});
