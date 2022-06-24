import { INews } from "./news"

export interface IUser {
    _id: string 
    fullName: string 
    email: string 
    password: string 
    news: INews[]
}