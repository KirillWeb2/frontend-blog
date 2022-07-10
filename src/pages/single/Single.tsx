import { FC } from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"

import "./single.css"

interface ISingle { }

const Single: FC<ISingle> = ({ }) => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  )
}

export default Single