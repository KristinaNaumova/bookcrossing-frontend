import {useController} from 'react-hook-form';
import {forwardRef, memo} from "react";
import clsx from "clsx";
import {Icon} from "@iconify/react";
import DatePicker from "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";
import {formatDate} from "../../../lib/date/date.ts";

interface RHFSelectProps {
    name: string;
    labelClassName?: string;
    className?: string;
    classNameSelect?: string;
    bodyClassname?: string;
    label?: string;
}

export default memo(function RHFDate({
                                         name,
                                         labelClassName,
                                         bodyClassname,
                                         classNameSelect,
                                         className,
                                         label
                                     }: RHFSelectProps) {
        const {field, fieldState: {
            error
        }} = useController({name})

        const TimeButton1 = forwardRef<any, any>(({onClick}, ref) => {

            return (
                <button onClick={onClick} ref={ref} type="button" className={clsx(`w-full relative h-[44px] px-[16px] py-[10px] 
                      rounded-[4px] text-body-normal text-primary bg-gray text-left
                    `, className)}>
                    <div
                        className="absolute top-1/2 transform right-[16px] w-[16px] h-[16px] -translate-y-1/2">
                        <Icon className={clsx(false && 'rotate-180')} icon={'uil:angle-down'} height={16} width={16}/>
                    </div>
                    <span
                        className="overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
                                            {_getOptionValue()}
                                            </span>
                </button>
            )
        });


        const _getOptionValue = () => {
            if (!field?.value) {
                return 'Не задано'
            }
            return formatDate(field.value, 'DD.MM.YYYY HH:mm')
        }

        return (
            <div className={clsx("relative select-custom", classNameSelect)}>
                <div
                    className={clsx("flex w-full flex-col gap-y-[4px]", bodyClassname)}>
                    <label
                        className={clsx("text-body-small self-start font-extrabold text-black", labelClassName)}>
                        {label}
                    </label>
                    <
                        // @ts-ignore
                        DatePicker
                        locale={ru}
                        minDate={new Date()} minTime={new Date()}
                        selected={field?.value || new Date()}
                        withPortal timeInputLabel="Время"
                        wrapperClassName="w-[20px]"
                        customInput={<TimeButton1/>}
                        onChange={field.onChange}
                        showTimeInput

                        className="  bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm mt-1 p-2"
                        calendarClassName="bg-white border border-gray-300 rounded-lg shadow-lg p-2"
                        dayClassName={(date) =>
                            clsx(
                                'text-center font-manrope rounded-full w-8 h-',
                                date.getDate() === new Date().getDate()
                                    ? 'bg-blue-500 text-white'
                                    : 'hover:bg-blue-100'
                            )
                        }
                        timeClassName="bg-white text-gray-700"
                    />
                    {error ? <small className="text-body-small text-red  ">
                        {error.message}
                    </small> : null}
                </div>
            </div>
        );
    }
)