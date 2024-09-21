import {MainLayout} from "widgets";
import {Icon} from "@iconify/react";
import Card from "shared/ui/Card/ui/Card.tsx";
import {MainCard} from "features";
import Button from "shared/ui/UI/Button/Button.tsx" ;
import {Link} from "react-router-dom";
import {getGenre, getLocation, getNotifications, getProfileEdit, getProfileMy} from "shared/config/routeConfig.tsx";
import {advApi, notificationApi} from "entities";
import {useStore} from "app/providers/MobX/store/store.ts";
import {observer} from "mobx-react-lite";

const ProfilePage = () => {

    const {data} = advApi.useGetMyAdvQuery()
    const {authStore} = useStore();
    const {data: count} = notificationApi.useGetNotificationCountQuery()
    const {user} = authStore

    return (
        <MainLayout>
            <h2 className="text-header-h2 font-extrabold">Профиль пользователя</h2>
            <div className="flex items-center gap-x-[8px] mt-[25px]">
                <h3 className="text-header-h3">{user?.name}</h3>
                <span className="text-body-normal font-extrabold text-accent2">{user?.rating ?? 'Оценок нет'}</span>
            </div>
            <div className="flex flex-col gap-y-[16px]">
                <div className="mt-[32px] flex items-center justify-between">
                    <h4 className="text-body-normal font-extrabold">Основная информация</h4>
                    <Link to={getProfileEdit()} className="flex items-center gap-x-[4px]">
                        <span className='text-body-normal text-accent2'>Редактировать</span>
                        <Icon icon={'uil:angle-left-b'} height={16} width={16} className="text-accent2 rotate-180"/>
                    </Link>
                </div>
                <Card className=" relative">
                    <div className=" flex flex-col gap-y-[4px] ">
                        {user?.contacts?.length ? user?.contacts?.map(contact => {
                            return <div className="items-center flex gap-x-[4px]" key={contact.id}>
                                <span className="text-primary font-extrabold text-footnote-normal">{contact.contact_type}</span>
                                <span className="text-primary text-footnote-normal">{contact.contact}</span>
                            </div>
                        }) : 'Контакты не указаны'}
                    </div>
                </Card>
            </div>
            <div className="flex flex-col gap-y-[16px]">
                <div className="mt-[32px] flex items-center justify-between">
                    <h4 className="text-body-normal font-extrabold">Мои объявления</h4>
                    <Link to={getProfileMy()} className="flex items-center gap-x-[4px]">
                        <span className='text-body-normal text-accent2'>Все объявления</span>
                        <Icon icon={'uil:angle-left-b'} height={16} width={16} className="text-accent2 rotate-180"/>
                    </Link>
                </div>
                <div className=" flex flex-col gap-y-[16px] overflow-y-auto p-[4px] max-h-[160px]">
                    {data?.filter(el => Number(el.user_id) === Number(user?.id)).length ? data.filter(el => Number(el.user_id) === Number(user?.id)).map(el => {
                        return <MainCard card={el} key={el.id} />
                    }) : 'У вас пока нет объявлений'}
                </div>
            </div>
            <div className="flex flex-col gap-y-[16px]">
                <div className="mt-[32px] flex items-center justify-between">
                    <div className="flex items-center gap-x-[4px]">
                        <h4 className="text-body-normal font-extrabold">Уведомления <span className="text-accent2">({count ?? 'Нет'})</span></h4>
                    </div>
                    <Link to={getNotifications()} className="flex items-center gap-x-[4px]">
                        <span className='text-body-normal text-accent2'>Смотреть</span>
                        <Icon icon={'uil:angle-left-b'} height={16} width={16} className="text-accent2 rotate-180"/>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-y-[16px]">
                <div className="mt-[32px] flex items-center justify-between">
                    <h4 className="text-body-normal font-extrabold">Любимые жанры</h4>
                    <Link to={getGenre()} className="flex items-center gap-x-[4px]">
                        <span className='text-body-normal text-accent2'>Редактировать</span>
                        <Icon icon={'uil:angle-left-b'} height={16} width={16} className="text-accent2 rotate-180"/>
                    </Link>
                </div>
                <Card className="mt-[16px] flex items-center flex-wrap gap-[10px]">
                    {user?.genres?.length ? user.genres.map(genre => {
                        return <Button key={genre.id} variant="light" className="rounded-lg">
                            {genre.name}
                        </Button>
                    }) : 'Любимые жанры не выбраны'}
                </Card>
            </div>
            <div className="flex flex-col gap-y-[16px]">
                <div className="mt-[32px] flex items-center justify-between">
                    <h4 className="text-body-normal font-extrabold">Локации</h4>
                    <Link to={getLocation()} className="flex items-center gap-x-[4px]">
                        <span className='text-body-normal text-accent2'>Редактировать</span>
                        <Icon icon={'uil:angle-left-b'} height={16} width={16} className="text-accent2 rotate-180"/>
                    </Link>
                </div>
                <Card className="mt-[16px] flex items-center flex-wrap gap-[10px]">
                    {user?.locations?.length ? user.locations.map(genre => {
                        return <Button key={genre.id} variant="light" className="rounded-lg">
                            {genre.name}
                        </Button>
                    }) : 'Локации не выбраны'}
                </Card>
            </div>
        </MainLayout>
    );
};

export default observer(ProfilePage);
