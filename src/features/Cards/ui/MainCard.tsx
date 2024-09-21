import Card from "shared/ui/Card/ui/Card.tsx";
import {BookIcon} from "shared/ui/Icon/Icons.tsx";
import {Status} from "shared/ui/Status";
import Button from "shared/ui/UI/Button/Button.tsx";
import {Link} from "react-router-dom";
import {getAdvtEdit, getDealView, getRouteBook} from "shared/config/routeConfig.tsx";
import {Adv} from "entities/Adv/models/types/adv.ts";
import {useStore} from "app/providers/MobX/store/store.ts";
import {observer} from "mobx-react-lite";
import {useMemo, MouseEvent, useState} from "react";
import {advApi, dealApi} from "entities";
import toast from "react-hot-toast";
import MainCardUser from "./MainCardUser.tsx";
import MainCardFavorites from "./MainCardFavorites.tsx";
import {BookModal} from "../../Modals";

interface MainCardProps {
    progress?: boolean;
    card?: Adv
    requestPage?: boolean
    cardClassName?: string
}

const MainCard = ({progress, card, requestPage = false, cardClassName}: MainCardProps) => {

    const [bookNameOpen, setBookNameOpen] = useState(false)
    const {authStore} = useStore();
    const [createOffer] = dealApi.useCreateOfferMutation()
    const [cancelOffer] = dealApi.useCancelOfferMutation()
    const [rejectOffer] = dealApi.useRejectOfferMutation()
    const [acceptOffer] = dealApi.useAcceptOfferMutation()
    const [publishAdFromArchive] = advApi.usePublishAdFromArchiveMutation()

    const {user} = authStore

    const myCard = useMemo(() => Number(user?.id) === Number(card?.user_id), [user, card])

    const hasMyRequest = useMemo(() => {
        if (card?.responses?.length) {
            return card?.responses.find(el => el.user_id === user?.id)
        }

        return false
    }, [user, card])

    const hasForMyRequest = useMemo(() => {
        if (card?.responses?.length && myCard && requestPage) {
            return card?.responses[0]
        }

        return false
    }, [card?.responses, myCard, requestPage])

    const onRequest = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (card?.id) {
            if (card.type === 'Exchange') {
                onOpenBookName()
            } else {
                createOffer({
                    id: card?.id
                }).unwrap().then(() => {
                    toast.success('Заявка отправлена')
                })
            }
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

    const onAcceptRequest = async (e: MouseEvent<HTMLButtonElement>) => {

        e.preventDefault()
        e.stopPropagation()
        if (hasForMyRequest) {
            acceptOffer(hasForMyRequest.id).unwrap().then(() => {
                toast.success(card?.type === 'Exchange' ? 'Запрос на обмен принят!' : 'Заявка на аренду принята')
            })
        }
    }

    const onPublic = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()


        if (card && (card.type === 'Exchange' || card.type === 'Rent') && (new Date(card.deadline) < new Date())) {
            toast.error('Пожалуйста, измените срок объявления перед его публикацией')

            return
        }

        if (card?.id) {
            publishAdFromArchive(card?.id).unwrap().then(() => {
                toast.success('Объявление опубликовано')
            })
        }
    }

    const onRejectRequest = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (hasForMyRequest) {
            rejectOffer(hasForMyRequest.id).unwrap().then(() => {
                toast.success('Отклик отклонён')
            })
        }
    }

    const onCloseBookName = () => setBookNameOpen(false)
    const onOpenBookName = () => setBookNameOpen(true)

    if (!card) {
        return null
    }

    return (
        <>
            <Card className={cardClassName}>
                <Link className="w-full h-full" to={progress ? getDealView(2) : getRouteBook(card.id)}>
                    <div className="flex items-center gap-x-[10px]">
                        <div className="flex items-center gap-x-[4px]">
                            <BookIcon/>
                            <span className="text-body-small font-extrabold">{card.book_name}</span>
                        </div>
                        <Status type={card.type}/>
                    </div>
                    <div className="mt-[8px] flex flex-col gap-y-[4px]">
                        <div className="items-center flex gap-x-[4px]">
                            <span className="text-primary text-footnote-normal">Автор:</span>
                            <span className="text-primary text-footnote-normal">{card.book_author}</span>
                        </div>
                        {card.type === 'Exchange' && card?.responses?.length ?
                            <div className="items-center flex gap-x-[4px]">
                                <span className="text-primary text-footnote-normal">Предложенная книга:</span>
                                <span
                                    className="text-primary text-footnote-normal">{card.responses[0].proposed_book}</span>
                            </div> : null}
                        {card?.genres?.length ? card.genres.map(genre => {
                            return <div className="items-center flex gap-x-[4px]" key={genre.id}>
                                <span className="text-primary text-footnote-normal">Жанр:</span>
                                <span className="text-primary text-footnote-normal">{genre.name}</span>
                            </div>
                        }) : null}
                        {card.user?.locations?.length ? <div className="flex flex-col ">
                        <span className="text-hint font-extrabold text-xs">
                            Локации
                        </span>
                            <div className="flex items-center gap-2 flex-wrap">
                                {card.user?.locations?.length ? card.user?.locations.map(genre => {
                                    return <span className="text-primary text-footnote-normal">{genre.name}</span>
                                }) : null}
                            </div>
                        </div> : null}
                        {hasForMyRequest ? <MainCardUser userId={hasForMyRequest.user_id}/> : null}
                    </div>
                    {!myCard ? <div className="mt-[16px] flex items-center justify-end gap-x-[16px]">
                        <MainCardFavorites card={card}/>
                        {hasMyRequest ? <Button variant="blue" onClick={onCancelRequest}>
                            Отменить отклик
                        </Button> : <Button onClick={onRequest}>
                            Отправить запрос
                        </Button>}
                    </div> : hasForMyRequest ? <div className="mt-[16px] flex items-center justify-end ">
                        <Button variant="text" onClick={onRejectRequest}>
                            Отклонить запрос
                        </Button>
                        <Button onClick={onAcceptRequest}>
                            Принять запрос
                        </Button>
                    </div> : card?.status === 'Archived' ?
                        <div className="mt-[16px] flex items-center justify-end gap-x-[8px]">
                            <Link to={getAdvtEdit(card.id)}>
                                <Button variant="text">
                                    Изменить объявление
                                </Button>
                            </Link>
                            <Button onClick={onPublic}>
                                Опубликовать
                            </Button>
                        </div> : <div className="mt-[16px] flex items-center justify-end gap-x-[16px]">
                            <Link to={getAdvtEdit(card.id)}>
                                <Button>
                                    Изменить объявление
                                </Button>
                            </Link>
                        </div>}
                </Link>
                <BookModal isOpen={bookNameOpen} close={onCloseBookName} onAccept={values => {
                    if (card?.id) {
                        createOffer({id: card?.id, proposed_book: values?.proposed_book}).unwrap().then(() => {
                            toast.success('Заявка отправлена')
                        })
                    }
                }}/>
            </Card>
                    {
                        card?.proposed_book ? <Card className=" w-full justify-center items-center flex !py-[6px]">
                            <span className="text-primary text-body-normal font-extrabold">{card?.proposed_book}</span>
                        </Card> : null
                    }
        </>
    );
};

export default observer(MainCard);