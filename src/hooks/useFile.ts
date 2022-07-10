import { ChangeEventHandler } from "react"
import { useAppDispatch } from "./ReduxHooks"
import { PostSlice } from "../redux/slices/PostSlice"
import { AuthSlice } from "../redux/slices/AuthSlice"
import FileService from "../redux/service/FileService"



export const useFile = () => {
    const dispatch = useAppDispatch()
    const { getUrl } = PostSlice.actions
    const { setAvatar } = AuthSlice.actions


    const uploadFile: ChangeEventHandler<HTMLInputElement> = async (e) => {
        try {
            if (e.target.files) {
                const file = e.target.files

                const formData = new FormData()

                formData.append('file', file[0])

                switch (e.target.name) {
                    case "write": {
                        const data = await FileService.upload({ files: formData, url: 'first' })
                        dispatch(getUrl(data.url))
                    }
                        break
                    case 'avatar': {
                        const data = await FileService.upload({ files: formData, url: 'first' })
                        dispatch(setAvatar(data.url))
                    }
                        break
                    default: return
                }

            }
        } catch (error) {
            console.log(error)
        }
    }


    return {
        uploadFile
    }
}