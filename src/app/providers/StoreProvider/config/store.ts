import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {baseAPI} from "shared/config/baseAPI.ts";

export function createReduxStore() {
    const rootReducers = combineReducers({
        [baseAPI.reducerPath]: baseAPI.reducer,
    });

    return configureStore({
        reducer: rootReducers,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseAPI.middleware),
        devTools: true,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export type RootState = ReturnType<typeof createReduxStore>['getState']

