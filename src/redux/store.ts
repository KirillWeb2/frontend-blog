import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"

import { userAPI } from './service/UserService'
import { postAPI } from './service/PostService'
import { authAPI } from './service/AuthService'

import AuthReducer from './slices/AuthSlice'
import PostReducer from './slices/PostSlice'
import UserReducer from './slices/UserSlice'


const rootReducer = combineReducers({
    AuthReducer,
    PostReducer,
    UserReducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                postAPI.middleware,
                authAPI.middleware,
                userAPI.middleware
            ),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
