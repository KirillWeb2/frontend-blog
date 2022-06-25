import { IUser } from "./user"

export interface ILogin {
    email: string
    password: string
}

export interface IResRegister {
    token: string
    user: IUser
}
export interface IResLogin {
    token: string
    user: IUser
}
export interface IRegister {
    fullName: string
    email: string
    password: string
}
