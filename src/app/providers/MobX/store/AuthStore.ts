import { makeAutoObservable } from "mobx";
import {User} from "entities/User/models/types/user.ts";

interface AuthStoreProps {
    user: null | User;
    onUser(user: User): void;
    isAuth: boolean;
    isInit: boolean;
    logout(): void;
    init(): void;
    auth(): void;
}

const AuthStore = () => {

    const data: AuthStoreProps = {
        user: null,
        onUser(user: User) {
            this.user = user
        },
        isAuth: false,
        isInit: false,
        logout() {
            this.isAuth = false;
        },
        init() {
            this.isInit = true;
        },
        auth() {
            this.isAuth = true;
        }
    }

    return makeAutoObservable(data, {}, {autoBind: true});
};

export default AuthStore;