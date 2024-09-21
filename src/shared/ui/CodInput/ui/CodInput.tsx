import {useEffect, useState} from "react";
import clsx from "clsx";
import {Icon} from "@iconify/react";
import {Deal} from "entities/Deal/models/types/deal.ts";
import {dealApi} from "entities";
import toast from "react-hot-toast";
import {getDealType} from "../../../config/routeConfig.tsx";

interface CodInputProps {
    deal: Deal;
    code?: string;
}

const CodInput = ({code: secret, deal}: CodInputProps) => {

    const [code, setCode] = useState('')

    const [confirmBookTransfer] = dealApi.useConfirmBookTransferMutation()
    const [confirmDealEnding] = dealApi.useConfirmDealEndingMutation()

    const accept = !!secret

    const onAcceptCode = () => {
        if (deal.deal_status === 'RefundWaiting') {
            confirmDealEnding({id: deal.id, code}).unwrap().then(() => {
                window.open(getDealType('completed'))
                toast.success('Сделка успешно завершена')
            }).catch(() => {
                toast.error('Неверный код')
            })
        } else {
            confirmBookTransfer({id: deal.id, code}).unwrap().then(() => {
                toast.success('Код подтверждён')
            }).catch(() => {
                toast.error('Неверный код')
            })
        }
    }

    useEffect(() => {
        if (secret) {
            setCode(secret)
        }
    }, [secret]);

    return (
        <>
            <p className="max-w-[297px] text-center mt-[32px] text-accent3 text-body-small mx-auto">{
                accept ? `Передайте код второму участнику сделки` : `Введите код второго участника сделки, чтобы
                подтвердить передачу книги`
            }</p>
            <div className={
                clsx(
                    "mt-[16px] mx-auto  items-center grid  rounded-[4px] h-[36px] bg-[#F5F7F9]",
                    accept ? "min-w-[189px]" : 'min-w-[251px] grid-cols-[1fr_44px]'
                )
            }>
                <input disabled={accept} value={code} onChange={e => setCode(e.target.value)} placeholder="Код"
                       type="number" className={
                    clsx(
                        "px-[16px] py-[6px] text-hint text-body-normal  bg-transparent",
                        accept && 'text-center'
                    )
                }/>
                {!accept ? <button onClick={onAcceptCode} type="button"
                                   className="w-[44px] h-full flex border-solid border-[#B8C2D0] border-l items-center justify-center">
                    <Icon icon="fluent-mdl2:accept-medium"/>
                </button> : null}
            </div>
        </>
    );
};

export default CodInput;