import {createContext, useContext} from "react";

interface AuthContextProps {
    isInitialized: boolean;
    method: 'jwt',
    login: (id: string, faculty_id: string, name: string) => Promise<void>,
    logout: () => Promise<void>,
    onSetUser: () => Promise<void>,
}

const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider = AuthContext.Provider

const useAuthContext = () => {
    const data = useContext(AuthContext)

    if (!data) {
        throw new Error(`Невозможно использовать useAuthContext вне AuthProvider`)
    }

    return data;
}

export {AuthProvider, useAuthContext}
