import clsx from "clsx";
import {AdvType} from "entities/Adv/models/types/adv.ts";

interface StatusProps {
    type: AdvType;
}

const Status = ({ type }: StatusProps) => {
    return (
        <div className={
            clsx(
                "py-[4px] px-[8px] rounded-[4px] text-[12px] font-extrabold rounded-[4px] leading-[16px]",
                type === 'Gift' && 'bg-lessonWork text-green',
                type === 'Rent' && 'bg-lessonConsultation text-red',
                type === 'Exchange' && 'bg-disabled text-hint',
            )
        }>
            {type === 'Gift' ? 'В дар' : type === 'Rent' ? 'Аренда' : 'Обмен'}
        </div>
    );
};

export default Status;