import {baseAPI} from "shared/config/baseAPI.ts";
import {Adv, AdvCreate} from "../types/adv.ts";

function removeBlankAttributes(obj: any) {
    const result: any = {};
    for (const key in obj) {
        if (obj[key] !== null && obj[key] !== undefined && obj[key] !== "") {
            result[key] = obj[key];
        }
    }
    return result;
}

const advApi = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        createAdv: builder.mutation<Adv[], AdvCreate & {genres: {id: number}[]}>({
            query: (data) => ({
                url: '/ad',
                body: data,
                method: 'POST',
            }),
            invalidatesTags: ['Adv'],
        }),
        addAdToFavourite: builder.mutation<any, number>({
            query: (id) => ({
                url: `/ad/${id}/favourite`,
                method: 'POST',
            }),
            invalidatesTags: ['Adv', 'Favorites', 'AdvOne'],
        }),
        getFavoritesCard: builder.query<any, number>({
            query: (id) => ({
                url: `/ad/${id}/favourite`,
                method: 'GET',
            }),
            providesTags: ['Adv', 'AdvOne'],
        }),
        removeFromFavourite: builder.mutation<any, number>({
            query: (id) => ({
                url: `/ad/${id}/favourite`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Adv', 'Favorites', 'AdvOne'],
        }),
        editAdv: builder.mutation<Adv[], AdvCreate & {id: number, genres: {id: number}[]}>({
            query: (data) => ({
                url: `/ad/${data.id}`,
                body: data,
                method: 'PUT',
            }),
            invalidatesTags: ['Adv', 'AdvOne'],
        }),
        publishAdFromArchive: builder.mutation<Adv, number>({
            query: (id) => ({
                url: `/ad/${id}/publish`,
                method: 'POST',
            }),
            invalidatesTags: ['Adv', 'AdvOne'],
        }),
        moveAdToArchive: builder.mutation<Adv, number>({
            query: (id) => ({
                url: `/ad/${id}/archive`,
                method: 'POST',
            }),
            invalidatesTags: ['Adv', 'AdvOne'],
        }),
        getMyAdv: builder.query<Adv[], void>({
            query: () => ({
                url: '/ad/my',
                method: 'GET',
            }),
            providesTags: ['Adv'],
        }),
        getMyArchiveAds: builder.query<Adv[], void>({
            query: () => ({
                url: '/ad/my/archived',
                method: 'GET',
            }),
            providesTags: ['Adv'],
        }),
        getFavoritesByIds: builder.query<Adv[], number[]>({
            query: (ids) => ({
                url: `/ad/favourites`,
                method: 'POST',
                body: { ids },
            }),
            providesTags: ['Adv', 'Favorites'],
        }),
        getAdv: builder.query<Adv, string>({
            query: (id) => ({
                url: `/ad/${id}`,
                method: 'GET',
            }),
            providesTags: ['AdvOne'],
        }),
        getAllAdv: builder.query<{
            ads: Adv[],
            pagination: {
                currentPageNumber: number,
                pagesCount: number,
                size: number,
            }
        }, any>({
            query: (params) => ({
                url: `/ad`,
                params: removeBlankAttributes(params),
                method: 'GET',
            }),
            providesTags: ['Adv'],
        }),
    }),
});

export default advApi