import { AuthSlice } from './../redux/slices/AuthSlice'
import { useEffect } from 'react'
import { useAppDispatch } from './ReduxHooks'
import { IRegister } from './../models/auth'
import { ILogin } from "../models/auth"
import { authAPI } from '../redux/service/AuthService'



export const useAuth = () => {
    const dispatch = useAppDispatch()
    const { setIsAuth, setUser } = AuthSlice.actions

    const [loginAsync, { data: loginUser, isSuccess: loginUserIsSuc, isError: loginError }] = authAPI.useLoginMutation()
    const [registerAsync, { data: registerUser, isSuccess: registerUserIsSuc, isError: RegisterError }] = authAPI.useRegisterMutation()
    const { data } = authAPI.useGetMeQuery(null)

    const login = async (form: ILogin) => loginAsync(form)
    const reg = async (data: IRegister) => registerAsync(data)

    const logout = () => {
        dispatch(setUser(null))
        dispatch(setIsAuth(false))

        localStorage.removeItem('token')
    }

    useEffect(() => {
        if (loginUserIsSuc) {
            dispatch(setIsAuth(true))
            dispatch(setUser(loginUser.user))
            localStorage.setItem('token', loginUser.token)
        }
    }, [loginUserIsSuc])

    useEffect(() => {
        if (registerUserIsSuc) {
            dispatch(setIsAuth(true))
            dispatch(setUser(registerUser.user))
            localStorage.setItem('token', registerUser.token)
        }
    }, [registerUserIsSuc])

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token && data) {
            dispatch(setUser(data))
        }
    }, [data])

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token) {
            dispatch(setIsAuth(true))
        }
    }, [])

    return {
        login, logout, reg, loginError, RegisterError, loginUser, registerUser
    }
}