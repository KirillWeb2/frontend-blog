import React, { FC, useMemo, useCallback, useState, useEffect } from 'react'
import { useFile } from '../../hooks/useFile'
import { useParams } from 'react-router-dom'
import { postAPI } from '../../redux/service/PostService'
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks'
import { PostSlice } from '../../redux/slices/PostSlice'
import SimpleMDE from 'react-simplemde-editor'
import Skeleton from './Skeleton'

import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'

import defaultImg from '../../img/default__write.jpeg'
import 'easymde/dist/easymde.min.css'
import "./write.css"
import { Alert } from '@mui/material'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

// изменение и добавление нового поста
const Write: FC = () => {
  const dispatch = useAppDispatch()

  const { id } = useParams()
  const { uploadFile } = useFile()

  // состояние
  const { url: img, tags: defaultTags } = useAppSelector(state => state.PostReducer)
  const [title, setTitle] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [tags, setTags] = useState<string[] | string>([])

  // управление состоянием и запросы на сервер
  const [createPost, { isSuccess: isSuccessCreate, isError: isErrorCreate }] = postAPI.useCreatePostMutation()
  const [changePost, { isSuccess: isSuccessChange, isError: isErrorChange }] = postAPI.useChangePostMutation()
  const { data: changePostItem } = postAPI.useGetOnePostQuery(id ? id : 'null')
  const { getChangePost, getUrl } = PostSlice.actions

  // функции поведения
  const options = useMemo(
    (): any => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  )

  const onChange = useCallback((value: string) => setText(value), [])

  const zeroingOut = () => {
    setTitle("")
    setText("")
    setTags([])

    dispatch(getUrl(""))
  }

  const submit = (event: React.FormEvent) => {
    event.preventDefault()

    if (!img) {
      return alert('Добавьте изображение')
    }

    const body = {
      title, text, img, tags
    }

    if (changePostItem) {
      const change = { _id: changePostItem._id, ...body }

      changePost(change)

      dispatch(getUrl(''))
      dispatch(getChangePost(null))
    } else {
      createPost(body)

      zeroingOut()
    }
  }

  useEffect(() => {
    if (changePostItem) {
      setTitle(changePostItem.title)
      setText(changePostItem.text)
      setTags(changePostItem.tags)

      dispatch(getUrl(changePostItem.img))
    } else {
      zeroingOut()
    }
  }, [changePostItem])

  if (id && !changePostItem) {
    return <Skeleton />
  }

  return (
    <div className="write">
      {isSuccessCreate && <Alert className='alert' variant="filled" severity="success">Пост успешно создан</Alert>}
      {isErrorCreate && <Alert className='alert' variant="filled" severity="error">Пост не создан</Alert>}
      {isSuccessChange && <Alert className='alert' variant="filled" severity="success">Пост успешно изменён</Alert>}
      {isErrorChange && <Alert className='alert' variant="filled" severity="error">Пост не изменён, произошла ошибка</Alert>}
      <img
        className="writeImg"
        src={img ? `http://localhost:4444/uploads/${img}` : defaultImg}
        alt=""
      />
      <form className="writeForm" onSubmit={submit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            onChange={uploadFile}
            type="file"
            name="write"
            style={{ display: "none" }}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)}
          />
        </div>
        <div className='writeTags'>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              className='writeTags-select'
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              input={
                <OutlinedInput label="Tag" />
              }
              renderValue={(selected) => Array.isArray(selected) && selected.join(', ')}
              MenuProps={MenuProps}
            >
              {defaultTags.map((name) => (
                <MenuItem key={name} value={name}>
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="writeFormGroup">
          <SimpleMDE className={"editor"} value={text} onChange={onChange} options={options} />
        </div>
        <button className="writeSubmit">
          Publish
        </button>
      </form>
    </div>
  )
}

export default Write
