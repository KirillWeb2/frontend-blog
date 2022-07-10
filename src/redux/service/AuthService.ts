import { getToken } from "../../axios"
import { ILogin } from "../../models/auth"
import { IUser } from '../../models/user'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'


export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:4444/api/auth` }),
    tagTypes: ['auth', 'me'],
    endpoints: (build) => ({
        getMe: build.query<IUser, any>({
            query: () => ({
                url: `/me`,
                headers: {
                    authorization: getToken()
                },
            }),
            providesTags: (result) => ['me'],
        }),
        login: build.mutation<any, ILogin>({
            query: (data) => ({
                url: `/login`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['auth'],
        }),
        register: build.mutation({
            query: (data) => ({
                url: `/register`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['auth'],
        }),
    }),
})
