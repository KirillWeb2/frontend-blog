import react, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/ReduxHooks'
import { userAPI } from '../../redux/service/UserService'

import avatar from '../../img/i.webp'
import "./Users.css"

const Users: FC = () => {
    const { user } = useAppSelector(state => state.AuthReducer)
    const { data: users } = userAPI.useGetAllUsersQuery(null)


    if (!users && !user) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='users-root'>
            {users && users.map(i =>
                <Link key={i._id} to={`/posts/${i._id}`}>
                    <div className='users-item'>
                        <div className='users-item-img'>
                            <img src={i.avatar ? `http://localhost:4444/uploads/${i.avatar}` : avatar} alt="" />
                        </div>
                        <p className='users-item-name'>
                            {i.fullName}
                        </p>
                    </div>
                </Link>

            )}
        </div>
    )
}

export default Users