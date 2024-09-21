import Card from "shared/ui/Card/ui/Card.tsx";
import {MainLayout} from "widgets";
import {userApi} from "entities";
import {useParams} from "react-router-dom";
import Loader from "shared/ui/Loader/Loader.tsx";

const UserPage = () => {

    const {id} = useParams()

    const {data} = userApi.useGetOtherUserQuery(String(id))

    if (!data) {
        return <MainLayout navigation={false}><Loader/></MainLayout>
    }

    return (
        <MainLayout navigation={false}>
            <h2 className="text-header-h2 font-extrabold">Страница пользователя</h2>
            <Card className="mt-[16px] relative">
                <div className="flex items-center gap-x-[10px]">
                    <div className="flex items-center gap-x-[4px]">
                        <span className="text-body-small font-extrabold">Имя пользователя</span>
                    </div>
                </div>
                <div className="mt-[1px] flex flex-col gap-y-[4px] pb-[16px]">
                    <span className="text-primary text-footnote-normal">{data.name}</span>
                </div>
                <div className="flex flex-col py-[16px] gap-y-[4px] relative">
                    <hr className="text-gray left-0 right-0 h-[1px] absolute top-0"/>
                    <h3 className="text-body-normal font-extrabold text-accent3">Рейтинг</h3>
                    <p className="text-accent text-footnote-normal font-extrabold">{data.rating ?? 'Оценок нет'}</p>
                </div>
                <div className="flex flex-col py-[16px] gap-y-[4px] relative">
                    <hr className="text-gray left-0 right-0 h-[1px] absolute top-0"/>
                    <h3 className="text-body-normal font-extrabold text-accent3">Факультет</h3>
                    <p className="text-accent3 text-footnote-normal">{data.faculty}</p>
                </div>
                {/*<div className="flex flex-col pt-[16px] gap-y-[10px]">*/}
                {/*    <hr className="text-gray left-0 right-0 h-[1px] absolute top-0"/>*/}
                {/*    <h3 className="text-body-normal font-extrabold text-accent3">Локация</h3>*/}
                {/*    <div className="gap-[10px] flex flex-wrap items-center">*/}
                {/*        <Button variant="secondary" className="rounded-lg">*/}
                {/*            3 корпус*/}
                {/*        </Button>*/}
                {/*        <Button variant="secondary" className="rounded-lg">*/}
                {/*            Общежитие Парус*/}
                {/*        </Button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </Card>
        </MainLayout>
    );
};

export default UserPage;
