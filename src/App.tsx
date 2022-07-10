import Topbar from './components/topbar/Topbar'
import { useAppSelector } from './hooks/ReduxHooks'
import { useAuth } from './hooks/useAuth'
import { useRouter } from "./router/router"

const App = () => {
  const { isAuth } = useAppSelector(state => state.AuthReducer)

  useAuth()

  const router = useRouter(isAuth)

  return (
    <>
      <Topbar />
      {router}
    </>
  )
}

export default App
