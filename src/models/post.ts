import { IUser } from "./user"

export interface IPost {
    _id: string
    author: IUser
    title: string
    text: string
    img: string
    tags: string[]
    viewsCount: number
    createdAt: string 
    updatedAt: string
}

export interface IPostCreate {
    title: string
    text: string
    img: string
    tags: string[] | string
}

export interface IResPostCreate {
    msg: string
    post: IPost
}

export interface IResPostRemove {
    msg: string
}

export interface IResPostChange {
    msg: string
}

export interface ITag {
    id: string
    value: string
    quantity: number
}