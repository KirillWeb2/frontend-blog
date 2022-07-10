import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Link, Navigate } from "react-router-dom"
import { useAppSelector } from '../../hooks/ReduxHooks'
import { useAuth } from '../../hooks/useAuth'

import "./login.css"

interface ILogin { }

interface FormData {
  email: string
  password: string
}

const Login: FC<ILogin> = ({ }) => {
  const { isAuth, isLoading } = useAppSelector(state => state.AuthReducer)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const { login, loginError } = useAuth()


  if (isAuth) {
    return <Navigate to={'/'} />
  }


  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form onSubmit={handleSubmit(login)} className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="email"
          autoComplete="on"
          {...register("email", { required: true })}
          placeholder="Enter your email..."
        />
        {errors.email?.type === 'required' && <p className="error">Email is required</p>}
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          autoComplete="on"
          {...register("password", { required: true, minLength: 6 })}
          placeholder="Enter your password..."
        />
        {errors.password?.type === 'required' && <p className="error">Password is required</p>}
        {errors.password?.type === 'minLength' && <p className="error">Min length 6</p>}
        {loginError && <p className="error">Ошибка авторизации</p>}
        <input disabled={isLoading} type="submit" className="loginButton" value="Login" />
      </form>
      <Link to="../register">
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  )
}

export default Login