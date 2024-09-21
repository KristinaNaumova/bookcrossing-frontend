import Card from "shared/ui/Card/ui/Card.tsx";
import {BookIcon} from "shared/ui/Icon/Icons.tsx";
import {Status} from "shared/ui/Status";
import {MouseEvent, useState} from 'react'
import {Link} from "react-router-dom";
import {getDealView} from "shared/config/routeConfig.tsx";
import {DealActive} from "entities/Deal/models/types/deal.ts";
import MainCardUser from "./MainCardUser.tsx";
import Button from "shared/ui/UI/Button/Button.tsx";
import DealEvaluate from "./DealEvaluate.tsx";

interface DealCardProps {
    card?: DealActive
}

const DealCard = ({card}: DealCardProps) => {

    const [evaluateMode, setEvaluateMode] = useState(false)

    if (!card) {
        return null
    }

    const onGoToView = (e: MouseEvent<HTMLAnchorElement>) => {
        if (card.deal_status === 'Finished') {
            e.stopPropagation()
            e.preventDefault()
        }
    }

    const onEvaluateMode = () => {
        if (card.deal_status === 'Finished' && !card?.user_evaluation) {
            setEvaluateMode(true)
        }
    }

    return (
        <Card>
            <Link className="w-full h-full" onClick={onGoToView} to={getDealView(card.id)}>
                <div className="flex items-center gap-x-[10px]">
                    <div className="flex items-center gap-x-[4px]">
                        <BookIcon/>
                        <span className="text-body-small font-extrabold">{card.ad.book_name}</span>
                    </div>
                    <Status type={card.ad.type}/>
                </div>
                <div className="mt-[8px] flex flex-col gap-y-[4px]">
                    <div className="items-center flex gap-x-[4px]">
                        <span className="text-primary text-footnote-normal">Автор:</span>
                        <span className="text-primary text-footnote-normal">{card.ad.book_author}</span>
                    </div>
                    {card.ad?.type === 'Exchange' ? <div className="items-center flex gap-x-[4px]" >
                        <span className="text-primary text-footnote-normal">Предложенная книга:</span>
                        <span className="text-primary text-footnote-normal">{card.proposed_book}</span>
                    </div> : null}
                    <MainCardUser userId={card.another_user_id}/>
                    <div className="mt-[16px] flex items-center justify-end gap-x-[16px]">
                        {evaluateMode ? <DealEvaluate setEvaluateMode={setEvaluateMode} deal={card}/> : <Button onClick={onEvaluateMode} variant={
                            card.deal_status === 'Finished' && card?.user_evaluation ? 'disabled' :
                                card.deal_status === 'Finished' && !card?.user_evaluation ? "success-light" : "success"}
                                      className="w-full">
                            {
                                card.deal_status === 'Finished' && card?.user_evaluation ? `Вы оценили сделку на ${card?.user_evaluation}` :
                                card.deal_status === 'Finished' && !card?.user_evaluation ? 'Оценить сделку' : card.deal_status === 'RefundWaiting' ? 'Ожидает возврата книги' : 'Ожидает передачи книги'}
                        </Button>}
                    </div>
                </div>
            </Link>
        </Card>
    );
};

export default DealCard;