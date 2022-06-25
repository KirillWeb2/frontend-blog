import { IFile } from './../../models/file';
import { createAsyncThunk } from '@reduxjs/toolkit';
import FileService from '../service/FileService';



export const fileThunk = createAsyncThunk('api/file',
    async (data: IFile) => {
        return await FileService.upload(data)
    }
)
