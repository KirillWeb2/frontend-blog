import { IResFile, IFile } from './../../models/file';
import axios from "../../axios"


class FileService {
    async upload(data: IFile) {
        const id = data.url ? data.url : 'first'
        const res = await axios.post<IResFile>('/api/file/' + id, data.files, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        return res.data
    }
}

export default new FileService()