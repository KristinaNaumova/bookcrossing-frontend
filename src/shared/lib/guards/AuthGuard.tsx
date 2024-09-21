import {ReactNode, useState} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {observer} from "mobx-react-lite";
import {useStore} from "app/providers/MobX/store/store.ts";
import Loader from "../../ui/Loader/Loader.tsx";

const AuthGuard = ({ children }: {children: ReactNode}) => {
  const {authStore} = useStore();
  const {isAuth: isAuthenticated, isInit: isInitialized} = authStore
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

  if (!isInitialized) {
    return <Loader/>;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Navigate to={'/'} />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return children;
}

export default observer(AuthGuard)