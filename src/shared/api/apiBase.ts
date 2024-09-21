import {BaseQueryApi, FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {__API__} from "../const";
import {TOKEN_KEY} from "../const/localstorage.ts";
import {QueryReturnValue} from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {FetchBaseQueryError, FetchBaseQueryMeta} from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import toast from "react-hot-toast";

const apiBase =
    async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
        const result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta> = await fetchBaseQuery({
            baseUrl:
            // @ts-ignore
                args?.url?.includes('/mrir/') ? `${__API__}` : `${__API__}/api`,
            prepareHeaders: (headers, {endpoint}) => {
                const accessToken = localStorage.getItem(TOKEN_KEY);
                const UPLOAD_ENDPOINTS = ['addInspectionFiles', 'addInstructionFiles'];

                if (accessToken) {
                    headers.set("authorization", `Bearer ${accessToken}`);
                }

                if (UPLOAD_ENDPOINTS.includes(endpoint)) {
                    // headers.set('content-type', 'multipart/form-data');
                } else {
                    headers.set("Content-Type", "application/json");
                }

                return headers;
            },
            credentials: "same-origin",
        })(
            args,
            api,
            extraOptions
        )

        // @ts-ignore
        if (result?.error?.originalStatus === 401) {
            localStorage.removeItem(TOKEN_KEY)
            window.location.href = '/auth'
        }

        // @ts-ignore
        if (result?.error?.status === 422 && result.meta?.request.method === 'POST') {
            alert('Пожалуйста, заполните все свойства !')
        }

        if (result?.error?.data) {
            // @ts-ignore
            toast.error(result?.error?.data?.message)
        }

        return result
    }

const apiBase2 =
    async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
        const result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta> = await fetchBaseQuery({
            baseUrl: `${__API__}/openweathermap_integration`,
            prepareHeaders: (headers) => {
                const accessToken = localStorage.getItem(TOKEN_KEY);
                if (accessToken) {
                    headers.set("authorization", `Bearer ${accessToken}`);
                    headers.set("Content-Type", "application/json");
                }

                return headers;
            },
            credentials: "same-origin",
        })(
            args,
            api,
            extraOptions
        )

        // @ts-ignore
        if (result?.error?.originalStatus === 401) {
            localStorage.removeItem(TOKEN_KEY)
            window.location.href = '/auth'
        }

        if (result?.error?.data) {
            // @ts-ignore
            toast.error(result?.error?.data?.message)
        }

        return result
    }


export {apiBase, apiBase2}