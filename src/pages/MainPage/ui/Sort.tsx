import {SortIcon} from "shared/ui/Icon/Icons.tsx";
import {Menu} from "@headlessui/react";
import {sortValues} from "../models";
import {useEffect, useState} from "react";

interface SortProps {
    handleDebounce(val: string): void;

    debounceTimeout: number
}

const Sort = ({debounceTimeout, handleDebounce}: SortProps) => {

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            handleDebounce(inputValue);
        }, debounceTimeout);
        return () => clearTimeout(timeoutId);
    }, [inputValue, debounceTimeout]);


    const onChangeActive = (val: string) => () => {
        setInputValue(val)
    }

    return (
        <div className="relative">
            <Menu>
                <Menu.Button className="h-full w-[24px] flex items-center justify-center">
                    <SortIcon/>
                </Menu.Button>
                <Menu.Items
                    className="absolute py-4 right-0 z-50  top-[130%] h-[250px] w-[200px] rounded-[4px]  bottom-0 bg-gray shadow-gray">
                    <div className="flex flex-col gap-y-0.5 overflow-scroll h-full">
                        {sortValues.map((val, key) => {
                            return <Menu.Item key={key}>
                                <button onClick={onChangeActive(val.value)}
                                        className="w-full relative h-auto px-[16px] py-[2px]
                       text-body-normal text-primary text-left
                    ">
                                    {val.label}
                                </button>
                            </Menu.Item>
                        })}
                    </div>
                </Menu.Items>
            </Menu>
        </div>
    );
};

export default Sort;