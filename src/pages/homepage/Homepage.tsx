import { FC } from 'react'
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./homepage.css"

interface IHomePage { }

const HomePage: FC<IHomePage> = ({ }) => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}

export default HomePage
