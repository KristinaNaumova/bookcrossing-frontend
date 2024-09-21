import {MainLayout} from "widgets";
import Button from "shared/ui/UI/Button/Button.tsx";
import {Link} from "react-router-dom";
import {getDealType} from "../../../shared/config/routeConfig.tsx";

const DealPage = () => {
    return (
        <MainLayout>
            <h2 className="text-header-h2 font-extrabold">Сделки</h2>
            <div className="mt-[100px] flex flex-col gap-y-[24px]">
                <Link className='w-full' to={getDealType('my')}>
                    <Button type="submit" className="w-full h-[48px] !font-extrabold !text-body-normal">
                        Мои отклики
                    </Button>
                </Link>
                <Link className='w-full' to={getDealType('request')}>
                    <Button type="submit" className="w-full h-[48px] !font-extrabold !text-body-normal">
                        Запросы на сделку
                    </Button>
                </Link>
                <Link className='w-full' to={getDealType('current')}>
                    <Button type="submit" className="w-full h-[48px] !font-extrabold !text-body-normal">
                        Текущие сделки
                    </Button>
                </Link>
                <Link className='w-full' to={getDealType('completed')}>
                    <Button type="submit" className="w-full h-[48px] !font-extrabold !text-body-normal">
                        Завершенные сделки
                    </Button>
                </Link>
            </div>
        </MainLayout>
    );
};

export default DealPage;