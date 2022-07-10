import { IResPostRemove, ITag } from './../../models/post'
import { IPost, IPostCreate } from '../../models/post'
import { IResPostCreate, IResPostChange } from '../../models/post'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { getToken } from '../../axios'



export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:4444/api/post` }),
    tagTypes: ['posts', 'tag', 'popular'],
    endpoints: (build) => ({
        getAllPosts: build.query<IPost[], any>({
            query: ({category, limit}) => ({
                url: `/get`,
                params: {
                    cat: category,
                    limit: limit
                }
            }),
            providesTags: (result) => ['posts'],
        }),
        getPopular: build.query<IPost[], any>({
            query: () => ({
                url: `/get/popular`,
            }),
            providesTags: (result) => ['popular'],
        }),
        getTags: build.query<ITag[], any>({
            query: () => ({
                url: `/get/tags`,
            }),
            providesTags: (result) => ['tag'],
        }),
        getOnePost: build.query<IPost, string>({
            query: (id) => ({
                url: `/get/${id}`,
                headers: {
                    authorization: getToken()
                },
            }),
            providesTags: (result) => ['posts'],
        }),
        createPost: build.mutation<IResPostCreate, IPostCreate>({
            query: (data) => ({
                url: `/create`,
                method: 'POST',
                headers: {
                    authorization: getToken()
                },
                body: data,
            }),
            invalidatesTags: ['posts'],
        }),
        deletePost: build.mutation<IResPostRemove, string>({
            query: (id) => ({
                url: `/remove/${id}`,
                method: 'DELETE',
                headers: {
                    authorization: getToken()
                },
            }),
            invalidatesTags: ['posts'],
        }),
        changePost: build.mutation<IResPostChange, IPostCreate>({
            query: (data) => ({
                url: `/change`,
                method: 'PATCH',
                body: data,
                headers: {
                    authorization: getToken()
                },
            }),
            invalidatesTags: ['posts'],
        }),
    }),
})