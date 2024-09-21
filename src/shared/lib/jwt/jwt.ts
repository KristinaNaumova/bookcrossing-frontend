import jwtDecode from 'jwt-decode';
import axios from "axios";
import {TOKEN_KEY} from "../../const/localstorage.ts";
import dayjs from "dayjs";

const isValidToken = (accessToken?: string) => {
    return accessToken;
};

const setSession = (accessToken?: string) => {
    if (accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken);
        axios.defaults.headers.common.token = accessToken;
    } else {
        localStorage.removeItem(TOKEN_KEY);
        delete axios.defaults.headers.common.token;
    }
};

const checkActiveToken = () => {
    const token = localStorage.getItem(TOKEN_KEY)

    if (token) {

        // @ts-ignore
        const tokenDate = jwtDecode(token)?.exp
        const now = dayjs().unix()

        if (tokenDate) {
            return tokenDate > now
        }

        return false;
    }

    return false
};

export {isValidToken, setSession, checkActiveToken};
