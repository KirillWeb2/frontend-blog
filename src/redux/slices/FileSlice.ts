import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fileThunk } from '../thunk/FileThunk'

interface IState {
    isLoading: boolean
    url: string,
    error: string
}

const initialState: IState = {
    isLoading: false,
    url: '',
    error: ''
}

export const FileSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {
        setUrl(state, action: PayloadAction<string>) {
            state.url = action.payload
        },
    },
    extraReducers: (builder) => {

        // ADD FILE
        builder.addCase(fileThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fileThunk.fulfilled, (state, action) => {
            state.url = action.payload.url
            state.isLoading = false
        })
        builder.addCase(fileThunk.rejected, (state) => {
            state.error = 'Ошибка загрузки файла'
            state.isLoading = false
        })
    }
})
export default FileSlice.reducer