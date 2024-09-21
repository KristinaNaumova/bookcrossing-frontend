import {baseAPI} from "shared/config/baseAPI.ts";
import {Genre} from "../types/genre.ts";

const genreApi = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        getGenres: builder.query<Genre[], void>({
            query: () => ({
                url: '/genre',
                method: 'GET',
            }),
            providesTags: ['Genres'],
        }),
        updateMyGenres: builder.mutation<Genre[], { genres: { id: number }[] }>({
            query: (data) => ({
                url: '/user/my/genre',
                body: data,
                method: 'PUT',
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export default genreApi