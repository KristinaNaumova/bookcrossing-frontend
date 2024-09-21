import {baseAPI} from "shared/config/baseAPI.ts";
import {Notification} from "../types/notification.ts";

const notificationApi = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        getNotifications: builder.query<Notification[], void>({
            query: () => ({
                url: '/notification',
                method: 'GET',
            }),
            providesTags: ['Notification'],
        }),
        getNotificationCount: builder.query<number, void>({
            query: () => ({
                url: '/notification/new/count',
                method: 'GET',
            }),
            providesTags: ['Notification'],
        }),
    }),
});

export default notificationApi