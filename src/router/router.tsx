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
    { id: 4, url: '*', component: <Homepage /> },
]

const routesPrivate = [
    { id: 1, url: '/', component: <Homepage /> },
    { id: 2, url: '/posts', component: <Single /> },
    { id: 3, url: '/post/:id', component: <Single /> },
    { id: 5, url: '/write', component: <Write /> },
    { id: 6, url: '/settings', component: <Settings /> },
    { id: 7, url: '*', component: <Homepage /> },
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