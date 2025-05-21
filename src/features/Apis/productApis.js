import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
    GetAllProduct : build.query({
      query : ()=>"/products"
    }),
    GetBestSellingProduct : build.query({
      query: ()=> "/products/category/smartphones"
    })
  }),
})

export const { useGetAllProductQuery, useGetBestSellingProductQuery } = productApi