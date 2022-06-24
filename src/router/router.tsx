import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/homepage/Homepage"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import Settings from "../pages/settings/Settings"
import Single from "../pages/single/Single"
import Write from "../pages/write/Write"

const routesLocal = [
    { id: 1, url: '/', component: <Homepage /> },
    { id: 2, url: '/login', component: <Login /> },
    { id: 3, url: '/register', component: <Register /> },
]

const routesPrivate = [
    { id: 1, url: '/:id', component: <Single /> },
    { id: 2, url: '/write', component: <Write /> },
    { id: 3, url: '/settings', component: <Settings /> },
]


export const useRouter = (isAuth: boolean) => {
    if (isAuth) {
        return (
            <Routes>
                {routesPrivate.map(i => {
                    return <Route key={i.id} path={i.url} element={i.component} />
                })}
            </Routes>
        )
    } else {
        return (
            <Routes>
                {routesLocal.map(i => {
                    return <Route key={i.id} path={i.url} element={i.component} />
                })}
            </Routes>
        )
    }
}