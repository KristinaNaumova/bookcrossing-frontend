import {ButtonHTMLAttributes, ReactNode} from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'blue' | 'light' | 'text' | 'success' | 'success-light' | 'disabled'
}

const Button = ({children, variant = 'primary', ...other}: ButtonProps) => {
    return (
        <button {...other} className={clsx(
            "rounded-[4px] h-[32px] px-[16px] py-[8px] text-footnote-normal font-extrabold text-white",
            variant === 'primary' && 'bg-accent2',
            variant === 'success' && 'bg-green/10 !text-green',
            variant === 'secondary' && 'bg-lessonBooking',
            variant === 'blue' && 'bg-blue !text-accent2',
            variant === 'light' && 'bg-light',
            variant === 'success-light' && 'bg-lessonWork !text-green',
            variant === 'text' && 'bg-transparent !text-accent2',
            (variant === 'disabled' || other?.disabled) && 'bg-disabled !text-hint',
            other?.className
        )}  >
            {children}
        </button>
    );
};

export default Button;
