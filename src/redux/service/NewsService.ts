import { IResLogin } from './../../models/auth';
import axios from "../../axios";
import { IResRegister } from "../../models/auth";
import { IUser } from '../../models/user';


class NewsService {
    async getAllNewsThunk() {
        const res = await axios.get<IResLogin>('/api/news/get')
        return res.data
    }
    async getOneNewsThunk(id: string) {
        const res = await axios.get<IResRegister>('/api/news/get/' + id)
        return res.data
    }
    async changeNewsThunk() {
        const res = await axios.get<IUser>('')
        return res.data
    }
    async removeNewsThunk() {
        const res = await axios.get<IUser>('')
        return res.data
    }
}

export default new NewsService()