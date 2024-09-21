import {memo, Suspense, useCallback} from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements, Outlet,
    Route,
    RouteProps,
    RouterProvider,
} from 'react-router-dom';
import AuthGuard from "shared/lib/guards/AuthGuard.jsx";
import GuestGuard from "shared/lib/guards/GuestGuard.jsx";
import {routeConfig} from "shared/config/routeConfig.tsx";
import {ReactRouter6Adapter} from "use-query-params/adapters/react-router-6";
import {QueryParamProvider} from "use-query-params";
import ScrollToTop from "shared/ui/ScrollToTop/ui/ScrollToTop.tsx";


const SuspenseLayout = () => {

    return (
        <Suspense fallback={<>...</>}>
            <QueryParamProvider adapter={ReactRouter6Adapter}>
                <Outlet/>
                <ScrollToTop/>
            </QueryParamProvider>
        </Suspense>
    )
};

const AppRouter = () => {

    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback={<div>loading...</div>}>{route.element}</Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.path === '/auth' ? (
                        <GuestGuard>{element}</GuestGuard>
                    ) : (
                        <AuthGuard>{element}</AuthGuard>
                    )
                }
            />
        );
    }, []);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<SuspenseLayout/>}>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Route>
        )
    );

    return <div className="layout">
        <RouterProvider router={router}/></div>;
};

export default memo(AppRouter);
