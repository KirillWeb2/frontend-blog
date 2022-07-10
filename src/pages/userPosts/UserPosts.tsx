import react, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { userAPI } from '../../redux/service/UserService'
import Posts from '../../components/posts/Posts'

import avatar from '../../img/i.webp'
import './UserPosts.css'

const UserPosts: FC = () => {
    const { id } = useParams()

    const { data } = userAPI.useGetUserAndPostsQuery(id ? id : "")

    if (!data) {
        return <h3>Loading...</h3>
    }

    return (
        <div className='posts-root'>
            <div className="posts-top">
                <div className="posts-top-img">
                    <img src={data.user.avatar ? `http://localhost:4444/uploads/${data.user.avatar}` : avatar} alt="" />
                </div>
                <div className="posts-top-name">
                    <p>{data.user.fullName}</p>
                </div>
                <div className="posts-top-name">
                    <p>{data.user.email}</p>
                </div>
            </div>
            <div className="posts-list">
                {data.posts && <Posts posts={data.posts} />}
            </div>
        </div>
    )
}

export default UserPosts