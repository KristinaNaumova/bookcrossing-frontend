import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal';
import {z, ZodType} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {RHFTextField} from "shared/ui/RHFTextField";
import {FormProvider} from "shared/ui/FormProvider";
import Button from "../../../shared/ui/UI/Button/Button.tsx";

interface BookModalProps {
    isOpen: boolean;
    close(): void;
    onAccept(data: any): void;
}

export const BookSchema: ZodType = z
    .object({
        proposed_book: z.string().min(1, 'Обязательное поле'),
    })


const BookModal = ({isOpen, close, onAccept}: BookModalProps) => {

    const methods = useForm<{ proposed_book: string }>({
        resolver: zodResolver(BookSchema)
    })

    const {handleSubmit} = methods

    const onSubmit = async (formValues: { proposed_book: string }) => {
        onAccept(formValues)
        close()
    }

    return (
        <Modal open={isOpen} onClose={close} center>
            <FormProvider methods={methods}
                          onSubmit={handleSubmit(onSubmit)}
                          className="mt-[12px] flex flex-col gap-y-[12px] !font-manrope">
                <RHFTextField label={'Название вашей книги'} name={'proposed_book'} helperText={""}/>
                <Button type="submit" className="mt-[20px] h-[48px] !font-extrabold !text-body-normal">
                    Сохранить
                </Button>
            </FormProvider>
        </Modal>
    );
};

export default BookModal;