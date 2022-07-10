import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface IState {
    avatar: string
}


const initialState: IState = {
    avatar: ""
}


export const UserSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        getAvatar(state, action: PayloadAction<string>) {
            state.avatar = action.payload
        }
    }
})


export default UserSlice.reducer