import { useNavigate } from 'react-router-dom';
import {observer} from "mobx-react-lite";
import {useStore} from "app/providers/MobX/store/store.ts";

const GuestGuard = ({ children }) => {
  const {authStore} = useStore();
  const {isAuth: isAuthenticated} = authStore
  const navigate = useNavigate()

  if (isAuthenticated) {
    navigate('/');
  }

  return children;
}

export default observer(GuestGuard)