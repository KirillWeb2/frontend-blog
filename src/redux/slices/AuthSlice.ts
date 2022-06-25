import { loginThunk } from './../thunk/AuthThunk';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../models/user"
import { getMeThunk, registerThunk } from "../thunk/AuthThunk"

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
    },
    extraReducers: (builder) => {
        // REGISTER
        builder.addCase(registerThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(registerThunk.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.isAuth = true
            state.isLoading = false
            localStorage.setItem("token", action.payload.token)
        })
        builder.addCase(registerThunk.rejected, (state) => {
            state.isLoading = false
        })

        // GET ME
        builder.addCase(getMeThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getMeThunk.fulfilled, (state, action) => {
            state.user = action.payload
            state.isAuth = true
            state.isLoading = false
        })
        builder.addCase(getMeThunk.rejected, (state) => {
            state.isLoading = false
        })

        // LOGIN
        builder.addCase(loginThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.isAuth = true
            state.isLoading = false
            localStorage.setItem("token", action.payload.token)
        })
        builder.addCase(loginThunk.rejected, (state) => {
            state.isLoading = false
        })
    },
})


export default AuthSlice.reducer