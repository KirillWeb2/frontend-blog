import { AuthSlice } from './../redux/slices/AuthSlice'
import { getMeThunk, loginThunk, registerThunk } from './../redux/thunk/AuthThunk'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './ReduxHooks'
import { IRegister } from './../models/auth'
import { ILogin } from "../models/auth"



export const useAuth = () => {
    const dispatch = useAppDispatch()
    const { setIsAuth, setUser } = AuthSlice.actions
    const { isAuth } = useAppSelector(state => state.AuthReducer)

    const login = async (data: ILogin) => {
        console.log('login вызвана')
        dispatch(loginThunk(data))
    }

    const logout = () => {
        dispatch(setUser(null))
        dispatch(setIsAuth(false))

        localStorage.removeItem('token')
    }

    const reg = async (data: IRegister) => {
        dispatch(registerThunk(data))
    }

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token && isAuth === false) {
            console.log('get me вызван')
            dispatch(setIsAuth(true))
            dispatch(getMeThunk())
        }
    }, [])

    return {
        login, logout, reg
    }
}