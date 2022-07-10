import { PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../../models/post'
import { createSlice } from '@reduxjs/toolkit'


interface IState {
    isLoading: boolean
    error: string
    changePost: IPost | null
    url: string
    tags: string[]
}


const initialState: IState = {
    isLoading: false,
    error: '',
    changePost: null,
    url: "",
    tags: ['Спорт', 'Игры', 'Здоровье', 'Природа', 'Красота', 'Проблемы']
}


export const PostSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        getChangePost(state, action: PayloadAction<IPost | null>) {
            state.changePost = action.payload
        },
        getUrl(state, action: PayloadAction<string>) {
            state.url = action.payload
        }
    }
})


export default PostSlice.reducer