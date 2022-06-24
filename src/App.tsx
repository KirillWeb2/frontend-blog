import Topbar from './components/topbar/Topbar'
import { useRouter } from "./router/router"

const App = () => {
  const currentUser = false

  const router = useRouter(currentUser)

  return (
    <div className="app">
      <Topbar />
      {router}
    </div>
  )
}

export default App
