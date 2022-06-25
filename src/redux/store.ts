import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import AuthReducer from './slices/AuthSlice'
import FileSlice from './slices/FileSlice'


const rootReducer = combineReducers({
    AuthReducer,
    FileSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
