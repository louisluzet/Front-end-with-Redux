import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export type User = {
    email: string,
    nickname: string,
    password: string,
    id_token: boolean
}

export type UsersState = User[];

const UsersInitialState: UsersState = [
    {
        email: "louisluzet@naver.com",
        nickname: 'louis',
        password: 'hihijiho1234',
        id_token: false,
    },
    {
        email: "JJangYunji@naver.com",
        nickname: 'JJangYunji',
        password: 'JJangYunji1234',
        id_token: false,
    }
]


// 회원추가
export const addUserAsync = createAsyncThunk("ADD_USER", async (user: User) => {
    const response = await axios.post("", user);
    return response.data;
});

// 추가되면 로그인
export const setUserAsync = createAsyncThunk("SET_USER", 
    async (user: User): Promise<User> => {
        const response = await axios.get("");
        return response.data;
    }
);



const userSlice = createSlice({
    name: 'user',
    initialState: UsersInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setUserAsync.fulfilled, (state, action) => {
            return {...state, ...action.payload};
        })
    }
});

export const userAction = userSlice.actions;
export default userSlice;