import {FormProvider as Form} from 'react-hook-form';
import {FormEvent, ReactNode} from "react";
import clsx from "clsx";

interface FormProviderProps {
    onSubmit: (data: FormEvent<HTMLFormElement>) => void;
    methods: any;
    style?: any;
    className?: string,
    children: ReactNode,
}

export default function FormProvider ({children, className, methods, onSubmit, style}: FormProviderProps) {
    return (
        <Form {...methods} >
            <form className={clsx('form-provider', className)} onSubmit={onSubmit} style={style}>
                {children}
            </form>
        </Form>
    );
};
