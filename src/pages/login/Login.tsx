import { FC } from 'react'
import { Link } from "react-router-dom"
import "./login.css"

interface ILogin { }

const Login: FC<ILogin> = ({ }) => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
      <Link to="../register">
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  )
}

export default Login