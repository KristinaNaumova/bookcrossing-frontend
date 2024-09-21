import {MainLayout} from "widgets";
import {notificationApi} from "entities";
import Card from "shared/ui/Card/ui/Card.tsx";
import {formatDate} from "shared/lib/date/date.ts";


const ProfileNotificationsPage = () => {

    const {data} = notificationApi.useGetNotificationsQuery()

    return (
        <MainLayout>
            <h2 className="text-header-h2 font-extrabold">Уведомления</h2>
            <div className="mt-[16px] flex flex-col gap-y-[16px] overflow-y-auto p-[4px]">
                {data?.length ? data.map(notification => {
                    return <Card className="flex flex-col gap-y-2 items-end" key={notification.id}>
                        <span>{formatDate(notification.date)}</span>
                        <span>{notification.message}</span>
                    </Card>
                }) : 'У вас нет уведомлений'}
            </div>
        </MainLayout>
    );
};

export default ProfileNotificationsPage;