import { FC } from 'react'
import { IPost } from '../../models/post'
import Post from "../post/Post"
import Skeleton from './Skeleton'

import "./posts.css"


interface IPosts {
  posts: IPost[] | undefined
}

const Posts: FC<IPosts> = ({ posts }) => {

  return (
    <div className="posts">
      {posts && Array.isArray(posts)
        ? posts.map((i: IPost) =>
          <Post key={i._id} post={i} />
        )
        : <Skeleton />
      }
    </div>
  )
}

export default Posts