import { ILogin, IRegister } from './../../models/auth';
import { createAsyncThunk } from "@reduxjs/toolkit"
import NewsService from '../service/NewsService';


export const getAllNewsThunk = createAsyncThunk('api/news/get',
    async (data: IRegister) => {
        return await NewsService.getAllNewsThunk()
    }
)

export const getOneNewsThunk = createAsyncThunk('api/news/get/:id',
    async (data: string) => {
        return await NewsService.getOneNewsThunk(data)
    }
)

export const changeNewsThunk = createAsyncThunk('api/auth/me',
    async () => {
        return await NewsService.changeNewsThunk()
    }
)


export const removeNewsThunk = createAsyncThunk('api/auth/me',
    async () => {
        return await NewsService.removeNewsThunk()
    }
)