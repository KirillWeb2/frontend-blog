import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { getToken } from '../../axios'
import { IChangeUser, IGetUserAndPost, IUser } from '../../models/user'


export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `https://blog-backend-124.herokuapp.com/api/user` }),
    tagTypes: ['user'],
    endpoints: (build) => ({
        getAllUsers: build.query<IUser[], null>({
            query: () => ({
                url: `/users`,
                headers: {
                    authorization: getToken()
                },
            }),
            providesTags: (result) => ['user'],
        }),
        getUserAndPosts: build.query<IGetUserAndPost, string>({
            query: (id) => ({
                url: `/posts/${id}`,
                headers: {
                    authorization: getToken()
                },
            }),
            providesTags: (result) => ['user'],
        }),
        delete: build.mutation<any, string>({
            query: (id) => ({
                url: `/remove/${id}`,
                method: 'DELETE',
                headers: {
                    authorization: getToken()
                },
            }),
            invalidatesTags: ['user'],
        }),
        change: build.mutation<any, IChangeUser>({
            query: (data) => ({
                url: `/change`,
                method: 'PATCH',
                body: data,
                headers: {
                    authorization: getToken()
                },
            }),
            invalidatesTags: ['user'],
        }),
    }),
})