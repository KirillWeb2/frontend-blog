import { FC } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import { useAppSelector } from '../../hooks/ReduxHooks'
import { IPost } from '../../models/post'
import { postAPI } from '../../redux/service/PostService'
import ReactMarkdown from 'react-markdown'
import Skeleton from './Skeleton'


import "./singlePost.css"


const SinglePost: FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { user } = useAppSelector(state => state.AuthReducer)

  const { data: activePost } = postAPI.useGetOnePostQuery(id ? id : "")
  const [deletePost, { }] = postAPI.useDeletePostMutation()

  const remove = (id: string) => {
    deletePost(id)

    navigate(-1)
  }

  const changePost = (data: IPost) => navigate(`/write/${data._id}`)

  if (!activePost) {
    return <Skeleton />
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={
            activePost.img
              ? `http://localhost:4444/uploads/${activePost.img}`
              : "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          }
          alt=""
        />
        <h1 className="singlePostTitle">
          {activePost.title}
          <div className="singlePostEdit">
          <span>Views: {activePost.viewsCount}</span>
            {activePost.author && activePost.author._id === user?._id &&
              <>
                <i onClick={() => changePost(activePost)} className="singlePostIcon far fa-edit"></i>
                <i onClick={() => remove(activePost._id)} className="singlePostIcon far fa-trash-alt"></i>
              </>
            }
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              {activePost.author
                ? <Link className="link" to={`/posts/${activePost.author._id}`}>
                  {activePost.author.fullName}
                </Link>
                : <span className='link'>Account deleted</span>
              }
            </b>
          </span>
          <span>{activePost.createdAt}</span>
        </div>
        <ReactMarkdown children={activePost.text} />
      </div>
    </div>
  )
}

export default SinglePost
