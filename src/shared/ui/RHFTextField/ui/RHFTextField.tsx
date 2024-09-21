import {useFormContext, Controller} from 'react-hook-form';
import {HTMLInputTypeAttribute, memo} from "react";
import clsx from "clsx";

interface RHFTextFieldProps {
    name: string;
    disabled?: boolean;
    type?: HTMLInputTypeAttribute;
    helperText: string;
    className?: string;
    bodyClassname?: string;
    notLabel?: boolean;
    label?: string;
    required?: boolean;
}

export default memo(function RHFTextField({name, notLabel, className, disabled, bodyClassname,  label, helperText }: RHFTextFieldProps) {
        const {control} = useFormContext();

        return (
            <Controller
                name={name}
                control={control}
                render={({field, fieldState: {error}}) => {

                    return (
                        <div className={clsx(bodyClassname, "flex flex-col gap-y-[4px]")}>
                            {!notLabel ? <label className="text-body-small font-extrabold text-black">
                                {label}
                            </label> : null}
                            <input disabled={disabled}
                                // @ts-ignore
                                   onBlur={field.onBlur} className={clsx(` h-[44px] px-[16px] py-[10px] w-full
                      rounded-[4px] text-body-normal placeholder:text-hint  bg-gray text-primary
                    `, className)} placeholder={helperText} {...field}/>
                            {error ? <small className="text-body-small text-red  ">
                                {error.message}
                            </small> : null}
                        </div>
                    )
                }}
            />
        );
    }
)
