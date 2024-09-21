'use client'
import {useState} from "react";

export interface UseFocusProps {
    autoFocus: boolean,
    key: string,
    onFocus: () => void,
    onBlur: () => void,
}

const useFocus = (initialFocus = false, id = "") => {
    const [focus, setFocus] = useState(initialFocus)
    const setFocusWithTrueDefault = (param: boolean) => setFocus(Boolean(param) ? param : true)

    const params: UseFocusProps = {
        autoFocus: focus,
        key: `${id}${focus}`,
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
    }

    return ([
        setFocusWithTrueDefault, params,
    ])
}

export {useFocus}