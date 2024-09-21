import {ReactNode, useEffect} from 'react';
import {setSession} from 'shared/lib/jwt/jwt.ts';
import {REFRESH_KEY, TOKEN_KEY} from "shared/const/localstorage.ts";
import {AuthProvider} from "../../../context/AuthContext.tsx";
import {observer} from "mobx-react-lite";
import {useStore} from "../../MobX/store/store.ts";
import {$api} from "shared/api/api.ts";
import {userApi} from "entities";
import toast from "react-hot-toast";
import CookieBanner from "./Cookie.tsx";

const JWTProvider = ({children}: { children: ReactNode }) => {
    const {authStore} = useStore();

    const {auth, logout, init, onUser} = authStore

    const [getUser] = userApi.useGetUserMutation()

    const onSetUser = () => getUser().unwrap().then(res => {
        onUser(res)
    })

    const login = async (id: string, faculty_id: string, name: string) => {
        $api.post('/auth/login', {
            id,
            faculty_id,
            name
        }).then(res => {
            localStorage.setItem(TOKEN_KEY, res.data.access_token)
            localStorage.setItem(REFRESH_KEY, res.data.refresh_token)
            setSession(res.data.access_token)
            auth();
            init()
            return Promise.resolve()
        }).then(() => onSetUser()        )
    };

    const logoutFunc = async () => {
        setSession(undefined);
        localStorage.removeItem(TOKEN_KEY)
        localStorage.removeItem(REFRESH_KEY)
        logout()
    };

    useEffect(() => {

        if (localStorage.getItem(REFRESH_KEY)) {
            $api.post('/auth/refresh', {
                refresh_token: localStorage.getItem(REFRESH_KEY),
            }).then(res => {
                localStorage.setItem(TOKEN_KEY, res.data.access_token)
                localStorage.setItem(REFRESH_KEY, res.data.refresh_token)
                setSession(res.data.access_token)
                auth();
                init()
                return Promise.resolve()
            }).then(() => {
                onSetUser()
            }).catch(() => {
                localStorage.removeItem(TOKEN_KEY)
                localStorage.removeItem(REFRESH_KEY)
            })
        } else {
            const params = new URLSearchParams(document.location.search);

            if (params.get('faculty_id') && params.get('name') && params.get('id')) {
                login(params.get('id') as string, params.get('faculty_id') as string, params.get('name') as string)
            } else {
                toast.error('Пожалуйста, задайте все параметры в query')
            }
        }

    }, [authStore]);

    return (
        <AuthProvider
            value={{
                method: 'jwt',
                isInitialized: false,
                login,
                logout: logoutFunc,
                onSetUser
            }}
        >
            {children}
            <CookieBanner />
        </AuthProvider>
    );
}

export default observer(JWTProvider);