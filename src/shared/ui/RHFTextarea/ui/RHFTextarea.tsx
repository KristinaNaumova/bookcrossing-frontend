import {useFormContext, Controller} from 'react-hook-form';
import {HTMLInputTypeAttribute, memo} from "react";
import clsx from "clsx";

interface RHFTextAreaProps {
    name: string;
    disabled?: boolean;
    type?: HTMLInputTypeAttribute;
    helperText: string;
    className?: string;
    bodyClassname?: string;
    line?: number;
    notLabel?: boolean;
    label?: string;
    required?: boolean;
}

export default memo(function RHFTextArea({name, notLabel, className, disabled, bodyClassname, line = 56, label, helperText }: RHFTextAreaProps) {
        const {control} = useFormContext();

        return (
            <Controller
                name={name}
                control={control}
                render={({field}) => {

                    return (
                        <div className={clsx(bodyClassname, "flex flex-col gap-y-[4px]")}>
                            {!notLabel ? <label className="text-body-small font-extrabold text-black">
                                {label}
                            </label> : null}
                            <textarea disabled={disabled} className={clsx(` h-[66px] px-[16px] py-[10px] w-full
                      rounded-[4px] text-body-normal placeholder:text-hint text-primary  bg-gray
                    `, className)} placeholder={helperText} {...field}/>
                            {!notLabel ? <div className="line" style={{width: line}}/> : null}
                        </div>
                    )
                }}
            />
        );
    }
)
