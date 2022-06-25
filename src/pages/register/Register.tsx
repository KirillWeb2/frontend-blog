import { FC } from "react"
import { useForm } from "react-hook-form"
import { Link, Navigate } from "react-router-dom"
import { useAppSelector } from "../../hooks/ReduxHooks"
import { useAuth } from "../../hooks/useAuth"
import "./register.css"

interface IRegister { }

interface FormData {
  fullName: string
  email: string
  password: string
}

const Register: FC<IRegister> = ({ }) => {
  const { isAuth, isLoading } = useAppSelector(state => state.AuthReducer)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const { reg } = useAuth()

  if (isAuth) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form onSubmit={handleSubmit(reg)} className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          autoComplete="on"
          {...register("fullName", { required: true, minLength: 6 })}
          placeholder="Enter your full name..."
        />
        {errors.fullName?.type === 'required' && <p className="error">Full name is required</p>}
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          autoComplete="on"
          {...register("email", { required: true })}
          placeholder="Enter your email..."
        />
        {errors.email?.type === 'required' && <p className="error">Email is required</p>}
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          autoComplete="on"
          {...register("password", { required: true, minLength: 6 })}
          placeholder="Enter your password..."
        />
        {errors.password?.type === 'required' && <p className="error">Password is required</p>}
        {errors.password?.type === 'minLength' && <p className="error">Min length 6</p>}
        <input disabled={isLoading} type="submit" className="registerButton" value="Register" />
      </form>
      <Link to="../login">
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  )
}


export default Register