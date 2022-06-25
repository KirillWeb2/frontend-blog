import { ILogin, IRegister } from './../../models/auth';
import { createAsyncThunk } from "@reduxjs/toolkit"
import AuthService from "../service/AuthService"


export const registerThunk = createAsyncThunk('api/auth/register',
    async (data: IRegister) => {
        return await AuthService.register(data)
    }
)

export const loginThunk = createAsyncThunk('api/auth/login',
    async (data: ILogin) => {
        return await AuthService.login(data)
    }
)

export const getMeThunk = createAsyncThunk('api/auth/me',
    async () => {
        return await AuthService.me()
    }
)