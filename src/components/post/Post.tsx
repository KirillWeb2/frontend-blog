import { FC } from 'react'
import { Link } from "react-router-dom"
import { IPost } from '../../models/post'

import "./post.css"

interface IPostComponent {
  post: IPost
}

const Post: FC<IPostComponent> = ({ post }) => {
  return (
    <div className="post">
      <img
        className="postImg"
        src={`http://localhost:4444/uploads/${post.img}`}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          {post.tags
            ? post.tags.map(i =>
              <span key={i} className="postCat">
                <Link className="link" to={`/posts?cat=${i}`}>
                  {i}
                </Link>
              </span>
            )
            : null
          }
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{post.createdAt}</span>
      </div>
      <p className='postDesc'>
        {post.text}
      </p>
    </div>
  )
}

export default Post
