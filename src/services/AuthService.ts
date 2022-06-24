import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ILogin, IRegister } from '../models/auth'


export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `https://blog-backend-124.herokuapp.com/api/auth` }),
  tagTypes: ['auth'],
  endpoints: (build) => ({
    login: build.mutation({
      query: (data: ILogin) => ({
        url: `/login`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['auth'],
    }),
    register: build.mutation({
      query: (data: IRegister) => ({
        url: `/register`,
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['auth'],
    }),
    getMe: build.query<any, any>({
      query: () => ({
        url: `/get`,
        headers: {
          token: "api-token"
        }
      }),
      providesTags: (result) => ['auth'],
    }),
  }),
})
