import React, { FC } from 'react'
import { useAppSelector } from '../../hooks/ReduxHooks'
import { userAPI } from '../../redux/service/UserService'
import { useAuth } from '../../hooks/useAuth'
import { useFile } from '../../hooks/useFile'
import { useForm } from 'react-hook-form'
import Sidebar from "../../components/sidebar/Sidebar"

import { Alert } from '@mui/material'

import avatar from '../../img/i.webp'
import "./settings.css"


interface FormData {
  fullName: string
  email: string
  password: string
}

const Settings: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const { user } = useAppSelector(state => state.AuthReducer)

  const { logout } = useAuth()
  const { uploadFile } = useFile()

  const [rem, { }] = userAPI.useDeleteMutation()
  const [change, { isLoading: changeLoading, isSuccess, isError }] = userAPI.useChangeMutation()

  const removeUser = (id: string) => {
    rem(id)
    logout()
  }

  const changeUser = (data: FormData) => {
    const dataChange = {
      _id: user?._id,
      ...data,
      avatar: user?.avatar
    }

    change(dataChange)
  }

  if (!user) {
    return <h3>Загружаю данные...</h3>
  }

  return (
    <div className="settings">

      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span onClick={() => removeUser(user._id)} className="settingsTitleDelete">Delete Account</span>
        </div>
        <form onSubmit={handleSubmit(changeUser)} className="settingsForm">
          {isSuccess && <Alert className='alert__settings' variant="filled" severity="success">Данные пользователя обновлены</Alert>}
          {isError && <Alert className='alert__settings' variant="filled" severity="error">Произошла ошибка</Alert>}
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={user.avatar ? `https://blog-backend-124.herokuapp.com/uploads/${user.avatar}` : avatar}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              name="avatar"
              onChange={uploadFile}
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Full name</label>
          <input
            type="text"
            defaultValue={user.fullName}
            {...register("fullName", { required: true, minLength: 6 })}
          />
          {errors.fullName?.type === 'required' && <p className="error">fullName is required</p>}
          {errors.fullName?.type === 'minLength' && <p className="error">fullName min length 6</p>}
          <label>Email</label>
          <input
            type="email"
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          {errors.email?.type === 'required' && <p className="error">email is required</p>}
          <label>New password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6, pattern: /^(?=.*\d)(?=.*[a-z]).{6,}$/ })}
            autoComplete=""
          />
          {errors.password?.type === 'required' && <p className="error">Password is required</p>}
          {errors.password?.type === 'minLength' && <p className="error">Password min length 6</p>}
          {errors.password?.type === 'pattern' && <p className="error">The password must contain at least 1 digit and a letter</p>}

          <button disabled={changeLoading} className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings
