import { IPost } from './post';


export interface IUser {
    _id: string
    fullName: string
    email: string
    password: string
    avatar: string
}

export interface IChangeUser {
    _id?: string
    email: string
    fullName: string
    password: string
}

export interface IGetUserAndPost {
    user: IUser
    posts: IPost[]
}