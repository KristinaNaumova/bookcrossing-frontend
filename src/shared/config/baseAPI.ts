import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {TOKEN_KEY} from "../const/localstorage.ts";

export const baseAPI = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(TOKEN_KEY);
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            headers.set('Accept', 'application/json')
            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: ['Genres', 'User', 'Locations', 'Favorites', 'OtherUser', 'Adv', 'AdvOne', 'Deal', 'MyAdv', 'Notification'],
});
