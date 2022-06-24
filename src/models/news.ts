import { IUser } from "./user";

export interface INews {
    _id: string
    author: IUser
    title: string
    text: string
    img: string
    tags: string[]
    viewsCount: number
}