import {MainLayout} from "widgets";
import Card from "shared/ui/Card/ui/Card.tsx";
import {BookIcon} from "shared/ui/Icon/Icons.tsx";
import {Status} from "shared/ui/Status";
import {Link, useParams} from "react-router-dom";
import Button from "shared/ui/UI/Button/Button.tsx";
import {getAdvtEdit, getProfile, getRouteUser} from "shared/config/routeConfig.tsx";
import {advApi, dealApi} from "entities";
import Loader from "shared/ui/Loader/Loader.tsx";
import {formatDate} from "shared/lib/date/date.ts";
import {useStore} from "app/providers/MobX/store/store.ts";
import {observer} from "mobx-react-lite";
import {MouseEvent, useMemo, useState} from "react";
import MainCardFavorites from "features/Cards/ui/MainCardFavorites.tsx";
import toast from "react-hot-toast";
import {BookModal} from "features";

const DescriptionPage = () => {

    const {id} = useParams()
    const [bookNameOpen, setBookNameOpen] = useState(false)
    const {data} = advApi.useGetAdvQuery(String(id))
    const [cancelOffer] = dealApi.useCancelOfferMutation()
    const [moveAdToArchive] = advApi.useMoveAdToArchiveMutation()
    const [createOffer] = dealApi.useCreateOfferMutation()

    const {authStore: {user}} = useStore();

    const myCard = useMemo(() => Number(user?.id) === Number(data?.user_id), [user, data])

    const hasMyRequest = useMemo(() => {
        if (data?.responses?.length) {
            return data?.responses.find(el => el.user_id === user?.id)
        }

        return false
    }, [user, data])

    const onRequest = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (data?.id) {
            if (data.type === 'Exchange') {
                onOpenBookName()
            } else {
                createOffer({id: data?.id}).unwrap().then(() => {
                    toast.success('Заявка отправлена')
                })
            }
        }
    }

    const onDeleteAdv = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (data?.id) {
            moveAdToArchive(data?.id).unwrap().then(() => {
                toast.success('Объявление отправлено в архив')
            })
        }
    }

    const onCancelRequest = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (hasMyRequest) {
            cancelOffer(hasMyRequest.id).unwrap().then(() => {
                toast.success('Отклик отменён')
            })
        }
    }

    const onGoToUser = () => {
      if (myCard) {
          return getProfile()
      }
      return getRouteUser(Number(data?.user_id))
    }

    const onCloseBookName = () => setBookNameOpen(false)
    const onOpenBookName = () => setBookNameOpen(true)

    if (!data) {
        return <MainLayout navigation={false}><Loader/></MainLayout>
    }

    return (
        <MainLayout navigation={false}>
            <h2 className="text-header-h2 font-extrabold">Описание книги</h2>
            <Card className="mt-[16px] relative">
                <div className="flex items-center gap-x-[10px]">
                    <div className="flex items-center gap-x-[4px]">
                        <BookIcon/>
                        <span className="text-body-small font-extrabold">{data.book_name}</span>
                    </div>
                    <Status type={data.type}/>
                </div>
                <div className="mt-[1px] flex flex-col gap-y-[4px] pb-[16px]">
                    <div className="items-center flex gap-x-[4px]">
                        <span className="text-primary text-footnote-normal">Автор:</span>
                        <span className="text-primary text-footnote-normal">{data.book_name}</span>
                    </div>
                    {data?.genres?.length ? data.genres.map(genre => {
                        return <div className="items-center flex gap-x-[4px]" key={genre.id}>
                            <span className="text-primary text-footnote-normal">Жанр:</span>
                            <span className="text-primary text-footnote-normal">{genre.name}</span>
                        </div>
                    }) : null}
                    {data.locations?.length ? <div className="flex flex-col ">
                        <span className="text-primary text-footnote-normal">
                            Локации
                        </span>
                        <div className="flex items-center gap-2 flex-wrap">
                            {data.locations?.length ? data.locations.map(genre => {
                                return <span className="text-primary text-footnote-normal">{genre.name}</span>
                            }) : null}
                        </div>
                    </div> : null}
                    {
                        (data.type === 'Rent') &&
                        <div className="items-center flex gap-x-[4px]">
                            <span className="text-primary text-footnote-normal">Срок:</span>
                            <span
                                className="text-primary text-footnote-normal">до {formatDate(data.deadline as unknown as string, 'DD.MM.YYYY HH:mm')}</span>
                        </div>
                    }
                    <Link to={onGoToUser()}
                          className="text-accent2 font-extrabold text-body-small">{data.user.name}</Link>
                </div>
                <div className="flex flex-col py-[16px] gap-y-[4px] relative">
                    <hr className="text-gray left-0 right-0 h-[1px] absolute top-0"/>
                    <h3 className="text-body-normal font-extrabold text-accent3">Описание</h3>
                    <p className="text-accent3 text-footnote-normal">{data.description}</p>
                </div>
                <div className="flex flex-col py-[16px] gap-y-[4px] relative">
                    <hr className="text-gray left-0 right-0 h-[1px] absolute top-0"/>
                    <h3 className="text-body-normal font-extrabold text-accent3">Комментарий</h3>
                    <p className="text-accent3 text-footnote-normal">{data.comment}</p>
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
            {!myCard ? <div className="mt-auto flex items-center gap-[12px] pb-[10%]">
                <MainCardFavorites card={data}/>
                {hasMyRequest ? <Button variant="blue" className="flex-1 !font-extrabold !text-body-normal !h-[48px] " onClick={onCancelRequest}>
                    Отменить отклик
                </Button> : <Button variant="blue" className="flex-1 !font-extrabold !text-body-normal !h-[48px] " onClick={onRequest}>
                    Отправить запрос
                </Button>}
            </div> : (myCard && data.status === 'Active') ? <div className="mt-auto flex flex-col gap-[8px] pb-[10%]">
                <Button  className="flex-1 !font-extrabold !text-body-normal !h-[48px] " onClick={onDeleteAdv}>
                    Удалить объявление
                </Button>
                <Link to={getAdvtEdit(data?.id)} className="w-full">
                    <Button variant="text" className="flex-1 !font-extrabold w-full !text-body-normal !h-[48px] " >Изменить объявление</Button>
                </Link>
            </div> : null}
            <BookModal isOpen={bookNameOpen} close={onCloseBookName} onAccept={values => {
                if (data?.id) {
                    createOffer({id: data?.id, proposed_book: values?.proposed_book}).unwrap().then(() => {
                        toast.success('Заявка отправлена')
                    })
                }
            }}/>
        </MainLayout>
    );
};

export default observer(DescriptionPage);