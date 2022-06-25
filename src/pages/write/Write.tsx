import { ChangeEventHandler, FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks'
import { fileThunk } from '../../redux/thunk/FileThunk'
import "./write.css"

interface IWrite { }

const Write: FC<IWrite> = ({ }) => {
  const dispatch = useAppDispatch()
  const { url } = useAppSelector(state => state.FileSlice)

  const fileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files) {
      const file = e.target.files

      const formData = new FormData()

      formData.append('file', file[0])

      dispatch(fileThunk({ files: formData, url }))
    }
  }

  return (
    <div className="write">
      <img
        className="writeImg"
        src={url ? `http://localhost:4444/uploads/${url}` : "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input onChange={fileChange} id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  )
}

export default Write
