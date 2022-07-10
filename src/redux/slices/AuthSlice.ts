import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../models/user"

interface IState {
    user: null | IUser
    isLoading: boolean
    isAuth: boolean
}

const initialState: IState = {
    user: null,
    isLoading: false,
    isAuth: false
}

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser | null>) {
            state.user = action.payload
        },
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
        },
        setAvatar(state, action: PayloadAction<string>) {
            if (state.user) {
                state.user.avatar = action.payload
            }
        },
    },
})


export default AuthSlice.reducer