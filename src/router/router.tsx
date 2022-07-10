import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/homepage/Homepage"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import Settings from "../pages/settings/Settings"
import Single from "../pages/single/Single"
import UserPosts from "../pages/userPosts/UserPosts"
import Users from "../pages/users/Users"
import Write from "../pages/write/Write"

const routesLocal = [
    { id: 1, url: '/', component: <Homepage /> },
    { id: 2, url: '/login', component: <Login /> },
    { id: 3, url: '/register', component: <Register /> },
    { id: 3, url: '/posts/:id', component: <UserPosts /> },
    { id: 4, url: '/post/:id', component: <Single /> },
    { id: 4, url: '/users', component: <Users /> },
    { id: 5, url: '*', component: <Homepage /> },

]

const routesPrivate = [
    { id: 1, url: '/', component: <Homepage /> },
    { id: 2, url: '/users', component: <Users /> },
    { id: 3, url: '/posts/:id', component: <UserPosts /> },
    { id: 4, url: '/post/:id', component: <Single /> },
    { id: 5, url: '/write', component: <Write /> },
    { id: 6, url: '/write/:id', component: <Write /> },
    { id: 7, url: '/settings', component: <Settings /> },
    { id: 8, url: '*', component: <Homepage /> },
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