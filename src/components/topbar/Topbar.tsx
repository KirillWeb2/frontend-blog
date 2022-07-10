import { FC } from 'react'
import { Link } from "react-router-dom"
import { useAppSelector } from '../../hooks/ReduxHooks'
import { useAuth } from '../../hooks/useAuth'
import avatar from '../../img/i.webp'

import "./topbar.css"


interface ITopbar { }

const Topbar: FC<ITopbar> = ({ }) => {
  const { isAuth, user } = useAppSelector(state => state.AuthReducer)
  const { logout } = useAuth()

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/users">
              USERS
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {isAuth && <li onClick={logout} className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {isAuth ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={user && user.avatar ? `http://localhost:4444/uploads/${user.avatar}` : avatar}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}

export default Topbar
