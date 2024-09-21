import { useFormContext, Controller, useController } from 'react-hook-form';
import { memo } from "react";
import clsx from "clsx";
import { Menu } from "@headlessui/react";
import { Icon } from "@iconify/react";

interface RHFSelectProps {
    name: string;
    labelClassName?: string;
    className?: string;
    classNameSelect?: string;
    options?: { label: string, value: string }[];
    bodyClassname?: string;
    label?: string;
    isMulti?: boolean; // Добавляем возможность мультивыбора
}

export default memo(function RHFSelect({
                                           name,
                                           options,
                                           labelClassName,
                                           bodyClassname,
                                           classNameSelect,
                                           className,
                                           label,
                                           isMulti = false, // По умолчанию мультивыбор отключен
                                       }: RHFSelectProps) {
    const { control } = useFormContext();
    const { field } = useController({ name });

    const onChangeActive = (val: string) => () => {
        if (isMulti) {
            const newValue = field.value.includes(val)
                ? field.value.filter((item: string) => item !== val)
                : [...field.value, val];
            field.onChange(newValue);
        } else {
            field.onChange(val);
        }
    };

    const _getOptionValue = () => {
        if (!field?.value || (isMulti && field.value.length === 0)) {
            return 'Не задано';
        }

        if (isMulti) {
            return field.value
                .map((val: string) => options?.find(el => el.value === val)?.label || '')
                .filter((label: string) => label !== '')
                .join(', ');
        }

        return options?.find(el => el.value === field.value)?.label || 'Не задано';
    };

    return (
        <Controller
            name={name}
            control={control}
            render={(
                // @ts-ignore
                { _, fieldState: { error } }) => (
                <div className={clsx("relative select-custom", classNameSelect)}>
                    <Menu>
                        {({ open }) => (
                            <>
                                <Menu.Button
                                    className={clsx("flex w-full flex-col gap-y-[4px]", bodyClassname)}>
                                    <label
                                        className={clsx("text-body-small font-extrabold text-black", labelClassName)}>
                                        {label}
                                    </label>
                                    <div className={clsx(`w-full relative h-[44px] px-[16px] py-[10px] 
                                    rounded-[4px] text-body-normal  bg-gray text-left text-primary
                                    `, className)}>
                                        <button
                                            className="absolute top-1/2 transform right-[16px] w-[16px] h-[16px] -translate-y-1/2">
                                            <Icon className={clsx(open && 'rotate-180')} icon={'uil:angle-down'}
                                                  height={16} width={16} />
                                        </button>
                                        <span
                                            className="overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
                                            {_getOptionValue()}
                                        </span>
                                    </div>
                                </Menu.Button>
                                <Menu.Items
                                    className="absolute left-0 right-0 z-50 top-[120%] max-h-[200px] h-auto min-h-[132px] rounded-[4px] w-full bottom-0 bg-gray shadow-gray">
                                    <div className="flex flex-col gap-y-0.5 overflow-scroll h-full">
                                        {options?.length ? options.map((val, key) => {
                                            const isSelected = isMulti && field?.value?.includes(val.value);
                                            return <Menu.Item key={key}>
                                                <button
                                                    onClick={onChangeActive(val.value)}
                                                    className={clsx("w-full relative h-[44px] px-[16px] py-[10px] text-body-normal text-primary text-left", isSelected && "bg-blue-100")}
                                                >
                                                    {val.label}
                                                    {isSelected && (
                                                        <Icon icon="uil:check" className="absolute right-4 top-1/2 transform -translate-y-1/2" height={16} width={16} />
                                                    )}
                                                </button>
                                            </Menu.Item>
                                        }) : null}
                                    </div>
                                </Menu.Items>
                                {error ? <small className="text-body-small text-red">
                                    {error.message}
                                </small> : null}
                            </>
                        )}
                    </Menu>
                </div>
            )}
        />
    );
});
