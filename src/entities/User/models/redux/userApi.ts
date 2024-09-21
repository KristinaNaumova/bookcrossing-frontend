import {baseAPI} from "shared/config/baseAPI.ts";
import {User} from "../types/user.ts";
import {Genre} from "../../../Genre/models/types/genre.ts";

const userApi = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.mutation<User, void>({
            query: () => ({
                url: '/user/my',
                method: 'GET',
            }),
            invalidatesTags: ['User'],
        }),
        getOtherUser: builder.query<User, string>({
            query: (id) => ({
                url: `/user/${id}`,
                method: 'GET',
            }),
            providesTags: ['OtherUser'],
        }),
        getUserById: builder.query<User, string>({
            query: (id) => ({
                url: `/user/${id}`,
                method: 'GET',
            }),
        }),
        updateMyContacts: builder.mutation<Genre[], any>({
            query: (data) => ({
                url: '/user/my/contact',
                body: data,
                method: 'PUT',
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export default userApi