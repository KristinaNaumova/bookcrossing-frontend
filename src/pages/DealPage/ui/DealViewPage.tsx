import {MainLayout} from "widgets";
import {BookIcon} from "shared/ui/Icon/Icons.tsx";
import {Status} from "shared/ui/Status";
import Card from "shared/ui/Card/ui/Card.tsx";
import CodInput from "shared/ui/CodInput/ui/CodInput.tsx";
import Button from "shared/ui/UI/Button/Button.tsx";
import {dealApi} from "entities";
import {useNavigate, useParams} from "react-router-dom";
import Loader from "shared/ui/Loader/Loader.tsx";
import {formatDate} from "shared/lib/date/date.ts";
import dayjs from "dayjs";
import {useEffect, useMemo, useState} from "react";
import duration from 'dayjs/plugin/duration';
import toast from "react-hot-toast";
import {getDealType} from "shared/config/routeConfig.tsx";
import ExtendModal from "features/Modals/ui/ExtendModal.tsx";

dayjs.extend(duration)

const DealViewPage = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const {data, error} = dealApi.useGetConcreteDealQuery(Number(id))
    const [cancelDeal] = dealApi.useCancelDealMutation()
    const [extendDealPeriod] = dealApi.useExtendDealPeriodMutation()
    const [extendOpen, setExtendOpen] = useState(false)

    const deadline = useMemo(() => {

            const diff = dayjs.duration(dayjs(data?.deal_waiting_end_time).diff(dayjs()));

            return {
                days: diff.days(),
                hours: diff.hours(),
                minutes: diff.minutes(),
            }
        }
        , [data?.deal_waiting_end_time])

    const deadlineRefund = useMemo(() => {

            const diff = dayjs.duration(dayjs(data?.refund_waiting_end_time).diff(dayjs()));

            return {
                days: diff.days(),
                hours: diff.hours(),
                minutes: diff.minutes(),
            }
        }
        , [data?.refund_waiting_end_time])

    const onCancelDeal = () => {
        if (data?.id) {
            cancelDeal(data?.id).unwrap().then(() => {
                navigate('/deal')
                toast.success('Сделка отменена')
            })
        }
    }

    const onExtendDeal = () => {
        if (data?.id) {
            onOpenExtend()
        }
    }

    const onCloseExtend = () => setExtendOpen(false)
    const onOpenExtend = () => setExtendOpen(true)

    useEffect(() => {
        if (error) {
            // @ts-ignore
            if (error?.data?.message === "This deal is finished. Yoy cannot get full information") {
                navigate(getDealType('completed'))
            }
        }
    }, [error]);

    if (!data) {
        return <MainLayout navigation={false}><Loader/></MainLayout>
    }

    return (
        <MainLayout>
            <h2 className="text-header-h2 font-extrabold">Сделка
                от {formatDate(data.deal_waiting_start_time, 'DD.MM.YYYY')}</h2>
            <div className="mt-[16px] py-[12px] relative">
                {data.deal_status === 'RefundWaiting' ? data.user_current_role === 'Giver' ?
                    <p className="text-center text-hint text-footnote-normal max-w-[320px] z-20 mx-auto">
                        Вы должны вернуть книгу в течение <span
                        className="font-extrabold">{deadlineRefund.days} д {deadlineRefund.hours} ч {deadlineRefund.minutes} мин.</span>
                    </p> : <p className="text-center text-hint text-footnote-normal max-w-[320px] z-20 mx-auto">
                        Вы должны передать книгу в течение <span
                        className="font-extrabold">{deadlineRefund.days} д {deadlineRefund.hours} ч {deadlineRefund.minutes} мин.</span>
                    </p> : data.user_current_role === 'Giver' ?
                    <p className="text-center text-hint text-footnote-normal max-w-[320px] z-20 mx-auto">
                        Вы должны передать книгу в течение <span
                        className="font-extrabold">{deadline.days} д {deadline.hours} ч {deadline.minutes} мин.</span> Иначе
                        сделка завершится
                    </p> : <p className="text-center text-hint text-footnote-normal max-w-[320px] z-20 mx-auto">
                        Вы должны передать книгу в течение <span
                        className="font-extrabold">{deadline.days} д {deadline.hours} ч {deadline.minutes} мин.</span> Иначе
                        сделка завершится
                    </p>}
                <div className="bg-gray absolute top-0 bottom-0 left-[-16px] right-[-16px] z-[-1]"></div>
            </div>
            <div className="mt-[32px] flex flex-col gap-y-[24px]">
                <Card className=" relative">
                    <div className="flex justify-between items-center gap-x-[10px]">
                        <span className="text-body-small font-extrabold">{data.another_user_name}</span>
                        {
                            data.deal_status === 'DealWaiting' ? <span className="text-hint font-extrabold text-xs">
                            Ожидает передачи книги
                        </span> : <span className="text-hint font-extrabold text-xs">
                            {data.user_current_role === 'Giver' ? 'Ожидает возврат книги' : 'Ожидает передачи книги'}
                        </span>
                        }
                    </div>
                    {data?.another_user_contacts?.length ? <div className="flex flex-col ">
                        <span className="text-hint font-extrabold text-xs">
                            Контакты пользователя
                        </span>
                        <div className="mt-[8px] flex flex-col gap-y-[4px] ">
                            {
                                data?.another_user_contacts?.map(contact => {
                                    return <div key={contact.id} className="items-center flex gap-x-[4px]">
                                    <span
                                        className="text-primary font-extrabold text-footnote-normal">{contact.contact_type}</span>
                                        <span className="text-primary text-footnote-normal">{contact.contact}</span>
                                    </div>
                                })
                            }
                        </div>
                    </div> : null}
                </Card>
                <Card className=" relative">
                    <div className="flex items-center gap-x-[10px]">
                        <div className="flex items-center gap-x-[4px]">
                            <BookIcon/>
                            <span className="text-body-small font-extrabold">{data.ad.book_name}</span>
                        </div>
                        <Status type={data.ad.type}/>
                    </div>
                    <div className="mt-[8px] flex flex-col gap-y-[4px] ">
                        <div className="items-center flex gap-x-[4px]">
                            <span className="text-primary text-footnote-normal">Автор:</span>
                            <span className="text-primary text-footnote-normal">{data.ad.book_author}</span>
                        </div>
                        <div className="items-center flex gap-x-[4px]">
                            <span className="text-primary text-footnote-normal">Жанр:</span>
                            <span className="text-primary text-footnote-normal">Роман</span>
                        </div>
                    </div>
                </Card>
            </div>
            {
                data?.proposed_book ? <Card className="mt-[16px] w-full justify-center items-center flex !py-[6px]">
                    <span className="text-primary text-body-normal font-extrabold">{data?.proposed_book}</span>
                </Card> : null
            }
            <CodInput code={data?.code ?? undefined} deal={data}/>
            {data.deal_status === 'DealWaiting' ? <Button onClick={onCancelDeal} variant="blue"
                                                          className=" h-[36px] !py-[6px] mt-[74px] !font-extrabold !text-body-normal">
                Отменить сделку
            </Button> : data.deal_status === 'RefundWaiting' && data.user_current_role === 'Giver' ?
                <Button onClick={onExtendDeal} variant="blue"
                        className=" h-[36px] !py-[6px] mt-[74px] !font-extrabold !text-body-normal">
                    Продлить срок сделки
                </Button> : null}
            <ExtendModal isOpen={extendOpen} close={onCloseExtend} onAccept={values => {
                if (data?.id) {
                    extendDealPeriod({id: data?.id, added_days: values?.added_days}).unwrap().then(() => {
                        toast.success('Срок хранения продлён')
                    })
                }
            }}/>
        </MainLayout>
    );
};

export default DealViewPage;