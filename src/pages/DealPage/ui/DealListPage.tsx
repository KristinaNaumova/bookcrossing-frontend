import {MainLayout} from "widgets";
import MyDealsFinished from "./DealList/MyDealsFinished.tsx";
import MyResponse from "./DealList/MyResponse.tsx";
import ForMeResponse from "./DealList/ForMeResponse.tsx";
import MyDealsActive from "./DealList/MyDealsActive.tsx";

interface DealListPageProps {
    type: "my" | "completed" | "current" | "request"
}

const DealListPage = ({type}: DealListPageProps) => {

    const getTitle = () => {
        switch (type) {
            case "completed": {
                return "Завершенные сделки"
            }
            case "current": {
                return "Текущие сделки"
            }
            case "my": {
                return "Мои отклики"
            }
            default: {
                return "Запросы на сделки"
            }
        }
    }

    const getDeals = () => {
        switch (type) {
            case "completed": {
                return <MyDealsFinished/>
            }
            case "my": {
                return <MyResponse/>
            }
            case "current": {
                return <MyDealsActive/>
            }
            case "request": {
                return <ForMeResponse/>
            }
        }
    }

    return (
        <MainLayout>
            <h2 className="text-header-h2 font-extrabold">{getTitle()}</h2>
            <div className="mt-[16px] flex flex-col gap-y-[16px] overflow-y-auto p-[4px]">
                {getDeals()}
            </div>
        </MainLayout>
    );
};

export default DealListPage;