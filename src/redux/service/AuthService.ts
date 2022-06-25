import { IResLogin, IRegister } from './../../models/auth';
import axios from "../../axios";
import { ILogin, IResRegister } from "../../models/auth";
import { IUser } from '../../models/user';


class AuthService {
    async login(data: ILogin) {
        const res = await axios.post<IResLogin>('/api/auth/login', data)
        return res.data
    }
    async register(data: IRegister) {
        const res = await axios.post<IResRegister>('/api/auth/register', data)
        return res.data
    }
    async me() {
        const res = await axios.get<IUser>('/api/auth/me')
        return res.data
    }
}

export default new AuthService()