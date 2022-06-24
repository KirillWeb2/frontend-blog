import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { authAPI } from "../services/AuthService"
import AuthReducer from './slices/AuthSlice'
import NewsReducer from './slices/NewsSlice'


const rootReducer = combineReducers({
    AuthReducer,
    NewsReducer,
    [authAPI.reducerPath]: authAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                authAPI.middleware
            ),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
