import './styles/index.scss'
import {AppRouter} from "./providers/router";
import dayjs from "dayjs";
import ru from 'dayjs/locale/ru';
import 'dayjs/locale/ru';
import {StoreProvider} from "./providers/StoreProvider";
import {JWTProvider} from "./providers/JWTProvider";
import {Toaster} from "react-hot-toast";

dayjs.locale(ru)

function App() {

    return (
        <StoreProvider>
            <JWTProvider>
                <main className="font-manrope">
                    <AppRouter/>
                </main>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </JWTProvider>
        </StoreProvider>
    )
}

export default App
