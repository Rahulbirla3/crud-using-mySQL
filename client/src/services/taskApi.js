import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const taskApi = createApi({
    reducerPath: "taskApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: (builder) => ({
        tasks: builder.query({
            query: () => "/products"
        })
    })
});

export const { useDeleteTaskMutation, useAddTaskMutation, useUpdateTaskMutation, useTasksQuery } = taskApi;

