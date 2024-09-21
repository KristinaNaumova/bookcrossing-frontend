import {ReactNode} from "react";
import {Header, Navigation} from "features";
import clsx from "clsx";

interface MainLayoutProps {
    children: ReactNode;
    navigation?: boolean;
    back?: boolean;
}

const MainLayout = ({children, navigation = true, back = true}: MainLayoutProps) => {
    return (
        < >
            <Header back={back}/>
            <div className={clsx("flex-1 p-[16px] pt-[72px] flex flex-col ", navigation && 'pb-[15vh]')}>
                {children}
            </div>
            {
                navigation ? <Navigation/> : null
            }
        </>
    );
};

export default MainLayout;