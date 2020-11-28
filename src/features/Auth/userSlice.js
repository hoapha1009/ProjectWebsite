import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userAPI from 'api/userAPI';
import StorageKeys from 'constants/storage-keys';

export const register = createAsyncThunk('user/register', async (payload) => {
    const data = await userAPI.register(payload);

    // save Localstorage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    return data.user;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
    },
    reducers: {},
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            return (state.current = action.payload);
        },
    },
});

const { reducer } = userSlice;
export default reducer;
