import {baseAPI} from "shared/config/baseAPI.ts";
import {Location} from "../types/location.ts";

const locationApi = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        getLocations: builder.query<Location[], void>({
            query: () => ({
                url: '/location',
                method: 'GET',
            }),
            providesTags: ['Locations'],
        }),
        updateMyLocations: builder.mutation<Location[], { locations: { id: number }[] }>({
            query: (data) => ({
                url: '/user/my/location',
                body: data,
                method: 'PUT',
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export default locationApi