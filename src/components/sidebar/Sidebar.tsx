import { FC, memo } from 'react'
import { Link } from "react-router-dom"
import { postAPI } from '../../redux/service/PostService'


import "./sidebar.css"


interface ISidebar { }

const Sidebar: FC<ISidebar> = ({ }) => {
  const { data: popular } = postAPI.useGetPopularQuery(null)
  const { data: tags } = postAPI.useGetTagsQuery(null)

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Frequently viewed</span>
        {popular && popular.map(i =>
          <Link key={i._id} className='views-item-link' to={`/post/${i._id}`}>
            <div className='views-item'>
              <span>{i.title}</span>
              <span>{i.viewsCount} views</span>
            </div>
          </Link>
        )}
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {tags && tags.map(i =>
            <li key={i.id} className="sidebarListItem">
              <Link className="link" to={`/posts?cat=${i.value}`}>
                {i.value} {i.quantity}
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}

export default memo(Sidebar)