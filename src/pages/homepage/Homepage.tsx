import { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useInView } from "react-intersection-observer"
import { postAPI } from '../../redux/service/PostService'
import Sidebar from "../../components/sidebar/Sidebar"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"

import "./homepage.css"


interface IHomePage { }

const HomePage: FC<IHomePage> = ({ }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [limit, setLimit] = useState<number>(6)

  let category = searchParams.get("cat")

  const { data: posts } = postAPI.useGetAllPostsQuery({
    category: category ? category : "",
    limit
  })

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView && posts) {
      setLimit(limit + 6)
    }
  }, [inView])

  return (
    <>
      <Header />
      <div className="home">
        <div className="homepage__posts">
          <Posts posts={posts} />
          <div ref={ref} className='posts-end'></div>
        </div>
        <Sidebar />
      </div>
    </>
  )
}

export default HomePage
