import axios from 'axios';
import {__API__} from "../const";
import {TOKEN_KEY} from "../const/localstorage.ts";

export const $api = axios.create({
    baseURL: `${__API__}`,
});

const authIntterceptor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem(TOKEN_KEY)}`;
    return config;
};

$api.interceptors.request.use(authIntterceptor);

$api.interceptors.response.use(
    (response) => response,
);