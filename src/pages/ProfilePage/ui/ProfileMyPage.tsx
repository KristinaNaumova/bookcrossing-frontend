import {MainLayout} from "widgets";
import {useState} from "react";
import clsx from "clsx";
import {MainCard} from "features";
import {advApi} from "entities";
import {useStore} from "../../../app/providers/MobX/store/store.ts";

type TAB = 'public' | 'archive'

const ProfileMyPage = () => {

    const [tab, setTab] = useState<TAB>('public')
    const {data: myAdv} = advApi.useGetMyAdvQuery()
    const {data: myArchiveAdv} = advApi.useGetMyArchiveAdsQuery()
    const {authStore} = useStore();
    const {user} = authStore

    const onChangeTab = (tab: TAB) => () => setTab(tab)

    const renderTab = (tab: TAB) => {
      switch (tab) {
          case "archive": {
              return <div className="mt-[22px] flex flex-col gap-y-[16px] overflow-y-auto p-[4px]">
                  {myArchiveAdv?.filter((el: { user_id: any; }) => Number(el.user_id) === Number(user?.id))?.length ? myArchiveAdv?.filter((el: { user_id: any; }) => Number(el.user_id) === Number(user?.id))?.map(archive => {
                      return <MainCard cardClassName="last:mb-[30%]" card={archive}/>
                  }) : 'У вас нет архивных объявлений'}
              </div>
          }
          case "public": {
              return <div className="mt-[22px] flex flex-col gap-y-[16px] overflow-y-auto p-[4px]">
                  {myAdv?.filter((el: { user_id: any; }) => Number(el.user_id) === Number(user?.id))?.length ? myAdv.filter((el: { user_id: any; }) => Number(el.user_id) === Number(user?.id))?.map(archive => {
                      return <MainCard cardClassName="last:mb-[30%]" card={archive}/>
                  }) : 'У вас нет активных объявлений'}
              </div>
          }
      }
    }

    return (
        <MainLayout>
            <div className="grid grid-cols-2 items-center">
                <div onClick={onChangeTab('public')} className={
                    clsx(
                        "text-body-normal h-[40px] flex items-center justify-center font-extrabold",
                        tab === 'public' ? 'text-accent2  border-solid border-b border-accent2' : 'text-primary border-solid border-b border-transparent'
                    )
                }>
                    Опубликованные
                </div>
                <div onClick={onChangeTab('archive')} className={
                    clsx(
                        "text-body-normal text-accent2 h-[40px] flex items-center justify-center font-extrabold" ,
                        tab === 'archive' ? 'text-accent2  border-solid border-b border-accent2' : 'text-primary border-solid border-b border-transparent'
                    )
                }>
                    В архиве
                </div>
            </div>
            {renderTab(tab)}
        </MainLayout>
    );
};

export default ProfileMyPage;
