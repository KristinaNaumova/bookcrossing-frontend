import {Icon} from "@iconify/react";
import {ChangeEvent, useEffect, useState} from "react";

interface SearchProps {
    handleDebounce(val: string): void;
    debounceTimeout: number
}

const Search = ({handleDebounce, debounceTimeout}: SearchProps) => {
    const [inputValue, setInputValue] = useState("");

    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            handleDebounce(inputValue);
        }, debounceTimeout);
        return () => clearTimeout(timeoutId);
    }, [inputValue, debounceTimeout]);

    return (
        <div className="h-[44px] py-[10px] px-[16px] bg-gray relative flex items-center rounded-[4px] gap-4">
            <input value={inputValue} onChange={onChangeInputValue} type="text" placeholder={"Поиск книги"}
                   className="h-full bg-transparent text-body-normal text-hint flex-1"/>
            <Icon icon={'uil:search'} height={16} width={16} className=" text-tertiary"/>
        </div>
    );
};

export default Search;