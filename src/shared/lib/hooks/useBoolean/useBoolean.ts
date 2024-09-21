import {MutableRefObject, useCallback, useRef, useState} from "react";

interface UseBooleanProps {
    toggle: () => void;
    on: () => void;
    off: () => void;
}

export const useBoolean = (initialValue: boolean) => {
    const [value, setValue] = useState<boolean>(initialValue)

    const on = useCallback(() => {
        setValue(true)
    }, [])

    const off = useCallback(() => {
        setValue(false)
    }, [])

    const updateValue: MutableRefObject<UseBooleanProps> = useRef({
        toggle: () => setValue(oldValue => !oldValue),
        on,
        off
    })

    const reference: UseBooleanProps = updateValue.current;

    const hook: [boolean, UseBooleanProps] = [value, reference]

    return hook
}