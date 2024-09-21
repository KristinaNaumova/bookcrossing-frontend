import {baseAPI} from "shared/config/baseAPI.ts";
import {Deal, DealActive} from "../types/deal.ts";
import {AdvReponse} from "../../../Adv/models/types/adv.ts";

const dealApi = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        createOffer: builder.mutation<Deal[], {id: number; proposed_book?: string}>({
            query: ({id, ...data}) => ({
                url: `/deal/offer/${id}`,
                body: data,
                method: 'POST',
            }),
            invalidatesTags: ['Deal', 'Adv'],
        }),
        cancelOffer: builder.mutation<Deal[], number>({
            query: (adId) => ({
                url: `/deal/offer/${adId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Deal', 'Adv', 'MyAdv'],
        }),
        rejectOffer: builder.mutation<Deal[], number>({
            query: (adId) => ({
                url: `/deal/reject/${adId}`,
                method: 'POST',
            }),
            invalidatesTags: ['MyAdv'],
        }),
        acceptOffer: builder.mutation<Deal[], number>({
            query: (adId) => ({
                url: `/deal/offer/${adId}/accept`,
                method: 'POST',
            }),
            invalidatesTags: ['MyAdv', 'Deal'],
        }),
        getMyDealsActive: builder.query<DealActive[], void>({
            query: () => ({
                url: `/deal`,
                method: 'GET',
                params: {
                    status: 'InProcess'
                }
            }),
            providesTags: ['MyAdv', 'Deal'],
        }),
        getMyDealsFinished: builder.query<DealActive[], void>({
            query: () => ({
                url: `/deal`,
                method: 'GET',
                params: {
                    status: 'Finished'
                }
            }),
            providesTags: ['MyAdv', 'Deal'],
        }),
        getConcreteDeal: builder.query<Deal, number>({
            query: (id) => ({
                url: `/deal/${id}`,
                method: 'GET',
            }),
            providesTags: ['Deal'],
        }),
        cancelDeal: builder.mutation<Deal, number>({
            query: (id) => ({
                url: `/deal/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Deal', 'MyAdv'],
        }),
        confirmBookTransfer: builder.mutation<Deal, { id: number, code: string }>({
            query: ({id, ...data}) => ({
                url: `/deal/${id}/confirm_book_transfer`,
                body: data,
                method: 'POST',
            }),
            invalidatesTags: ['Deal'],
        }),
        confirmDealEnding: builder.mutation<Deal, { id: number, code: string }>({
            query: ({id, ...data}) => ({
                url: `/deal/${id}/confirm_deal_ending`,
                body: data,
                method: 'POST',
            }),
            invalidatesTags: ['Deal'],
        }),
        evaluate: builder.mutation<Deal, { id: number, evaluation: number }>({
            query: ({id, ...data}) => ({
                url: `/deal/${id}/evaluate`,
                body: data,
                method: 'POST',
            }),
            invalidatesTags: ['Deal'],
        }),
        extendDealPeriod: builder.mutation<Deal, { id: number, added_days: number }>({
            query: ({id, ...data}) => ({
                url: `/deal/${id}/extend_deal_period`,
                body: data,
                method: 'POST',
            }),
            invalidatesTags: ['Deal'],
        }),
        getMyResponse: builder.query<AdvReponse[], void>({
            query: () => ({
                url: `/deal/my/response`,
                method: 'GET',
            }),
            providesTags: ['MyAdv'],
        }),
        getForMeResponse: builder.query<AdvReponse[], void>({
            query: () => ({
                url: `/deal/request`,
                method: 'GET',
            }),
            providesTags: ['MyAdv'],
        }),
    }),
});

export default dealApi