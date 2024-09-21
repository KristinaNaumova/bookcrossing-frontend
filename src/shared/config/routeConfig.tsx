import {RouteProps} from "react-router-dom";
import {
    AdvtCreatePage,
    AdvtEditPage,
    AdvtPage, DealListPage,
    DealPage, DealViewPage,
    DescriptionPage,
    FavoritesPage, GenrePage,
    MainPage, ProfileEditPage, ProfileMyPage, ProfileNotificationsPage, ProfilePage,
    UserPage
} from "pages";
import LocationPage from "../../pages/LocationPage/ui/LocationPage.tsx";

export enum AppRoutes {
    MAIN = 'main',
    ADVT = 'advt',
    ADVT_CREATE = 'advt_create',
    NOTIFICATIONS = 'notifications',
    ADVT_EDIT = 'advt_edit',
    DESCRIPTION = 'description',
    PROFILE = 'profile',
    PROFILE_EDIT = 'profile/edit',
    PROFILE_MY = 'profile/my',
    USER = 'user',
    GENRE = 'genre',
    LOCATION = 'locations',
    FAVORITES = 'favorites',
    DEAL = 'del',
    DEAL_LIST_MY = 'delMy',
    DEAL_LIST_COMPLETED = 'delCompleted',
    DEAL_LIST_CURRENT = 'delCurrent',
    DEAL_LIST_REQUEST = 'delRequest',
    DEAL_VIEW = 'dealView',
}


export const RoutePath: {
    [key: string]: string
} = {
    [AppRoutes.MAIN]: '/main',
    [AppRoutes.ADVT]: '/advt',
    [AppRoutes.GENRE]: '/genre',
    [AppRoutes.LOCATION]: '/location',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOTIFICATIONS]: '/notifications',
    [AppRoutes.PROFILE_EDIT]: '/profile/edit',
    [AppRoutes.PROFILE_MY]: '/profile/my',
    [AppRoutes.ADVT_CREATE]: '/advt/create',
    [AppRoutes.ADVT_EDIT]: '/advt/edit',
    [AppRoutes.DESCRIPTION]: '/description',
    [AppRoutes.USER]: '/user',
    [AppRoutes.FAVORITES]: '/favorites',
    [AppRoutes.DEAL]: '/deal',
    [AppRoutes.DEAL_LIST_COMPLETED]: '/deal',
    [AppRoutes.DEAL_LIST_MY]: '/deal',
    [AppRoutes.DEAL_LIST_REQUEST]: '/deal',
    [AppRoutes.DEAL_LIST_CURRENT]: '/deal',
    [AppRoutes.DEAL_VIEW]: '/deal',
}

const getRouteBook = (id: number) => `/book/${id}`
const getRouteUser = (id: number) => `/user/${id}`
const getAdvt = (id: number) => `/advt/${id}`
const getAdvtCreate = () => `/advt/create`
const getAdvtEdit = (id: number) => `/advt/edit/${id}`
const getGenre = () => `/genres`
const getLocation = () => `/locations`

const getDealType = (type: string) => `/deal/${type}`
const getDealView = (id: number) => `/deal/${id}/view`

const getProfileEdit = () => `/profile/edit`

const getProfileMy = () => `/profile/my`

const getProfile = () => `/profile`

const getNotifications = () => `/profile/notifications`

const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: '/',
        element: <MainPage/>
    },
    [AppRoutes.DESCRIPTION]: {
        path: '/book/:id',
        element: <DescriptionPage/>
    },
    [AppRoutes.ADVT]: {
        path: '/advt/:id',
        element: <AdvtPage/>
    },
    [AppRoutes.PROFILE]: {
        path: '/profile',
        element: <ProfilePage/>
    },
    [AppRoutes.NOTIFICATIONS]: {
        path: '/profile/notifications',
        element: <ProfileNotificationsPage/>
    },
    [AppRoutes.GENRE]: {
        path: '/genres',
        element: <GenrePage/>
    },
    [AppRoutes.LOCATION]: {
        path: '/locations',
        element: <LocationPage/>
    },
    [AppRoutes.PROFILE_EDIT]: {
        path: '/profile/edit',
        element: <ProfileEditPage/>
    },
    [AppRoutes.PROFILE_MY]: {
        path: '/profile/my',
        element: <ProfileMyPage/>
    },
    [AppRoutes.ADVT_CREATE]: {
        path: '/advt/create',
        element: <AdvtCreatePage/>
    },
    [AppRoutes.ADVT_EDIT]: {
        path: '/advt/edit/:id',
        element: <AdvtEditPage/>
    },
    [AppRoutes.USER]: {
        path: '/user/:id',
        element: <UserPage/>
    },
    [AppRoutes.FAVORITES]: {
        path: '/favorites',
        element: <FavoritesPage/>
    },
    [AppRoutes.DEAL]: {
        path: '/deal',
        element: <DealPage/>
    },
    [AppRoutes.DEAL_LIST_MY]: {
        path: '/deal/my',
        element: <DealListPage type="my"/>
    },
    [AppRoutes.DEAL_LIST_CURRENT]: {
        path: '/deal/current',
        element: <DealListPage type="current"/>
    },
    [AppRoutes.DEAL_LIST_REQUEST]: {
        path: '/deal/request',
        element: <DealListPage type="request"/>
    },
    [AppRoutes.DEAL_LIST_COMPLETED]: {
        path: '/deal/completed',
        element: <DealListPage type="completed"/>
    },
    [AppRoutes.DEAL_VIEW]: {
        path: '/deal/:id/view',
        element: <DealViewPage />
    },
}

export {routeConfig, getRouteBook,  getLocation, getRouteUser, getAdvt, getAdvtEdit, getAdvtCreate,
    getDealType, getDealView, getProfileEdit, getProfileMy, getGenre, getProfile, getNotifications}
