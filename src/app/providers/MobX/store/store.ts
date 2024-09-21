import { createContext, useContext } from "react";
import authStore from "./AuthStore.ts";

const store = {
    authStore: authStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
    return useContext<typeof store>(StoreContext);
};

export default store;