import {ReactNode} from "react";
import clsx from "clsx";

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card = ({children, className}: CardProps) => {
    return (
        <div className={clsx(
            "shadow-card w-full rounded-[8px] p-[16px]",
            className
        )}>
            {children}
        </div>
    );
};

export default Card;