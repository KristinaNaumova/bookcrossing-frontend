import FormProvider from "shared/ui/FormProvider/ui/FormProvider.tsx";
import {useFieldArray, useForm} from "react-hook-form";
import {RHFTextField} from "shared/ui/RHFTextField";
import Button from "shared/ui/UI/Button/Button.tsx";
import {v4 as uuidv4} from "uuid"
import {Icon} from "@iconify/react";
import {userApi} from "entities";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../app/providers/MobX/store/store.ts";
import {useEffect} from "react";
import {useAuthContext} from "../../../app/context/AuthContext.tsx";
import toast from "react-hot-toast";

const defaultValues = {
    contacts: []
}

interface Contacts {
    contacts: {
        id: string,
        contact_type: string,
        contact: string,
    }[]
}

const ProfileForm = () => {

    const methods = useForm<Contacts>({
        defaultValues,
    })
    const {authStore: {user}} = useStore();
    const {onSetUser} = useAuthContext()
    const {handleSubmit, control, setValue} = methods
    const [updateMyContacts] = userApi.useUpdateMyContactsMutation()

    const {
        fields: contacts,
        append: appendContact,
        remove: removeContact,
    } = useFieldArray({
        control,
        name: 'contacts',
    })

    const onAppendNewContact = () => {
        appendContact({
            id: uuidv4(),
            contact_type: "",
            contact: "",
        })
    }

    const onDeleteContact = (index: number) => () => {
        removeContact(index)
    }

    const onSubmit = (data: Contacts) => {
        updateMyContacts(data).unwrap().then(() => {
            toast.success('Контакты сохранены')
            onSetUser()
        })
    }

    useEffect(() => {
        if (user?.contacts?.length) {
            setValue('contacts', user?.contacts)
        }
    }, [user]);

    return (
        <FormProvider methods={methods}
                      onSubmit={handleSubmit(onSubmit)}
                      className="mt-[12px] flex flex-col gap-y-[6px]">
            {
                contacts.map((contact, index) => {
                    return <div className="grid grid-cols-[4fr_4fr_1fr] gap-4" key={contact.id}>
                        <RHFTextField label={'Название'} name={`contacts.${index}.contact_type`} helperText={""}/>
                        <RHFTextField label={'Значение'} name={`contacts.${index}.contact`} helperText={""}/>
                        <div className="flex flex-1 w-full h-full pt-[24px] justify-center items-center">
                            <Icon onClick={onDeleteContact(index)} icon={'el:remove'} height={16} width={16} className="text-red "/>
                        </div>
                    </div>
                })
            }
            <Button onClick={onAppendNewContact} type="button" variant="text" className=" h-[48px] !font-extrabold !text-body-normal">
                Добавить контакт
            </Button>
            <Button disabled={!contacts.length} onClick={handleSubmit(onSubmit)} className=" h-[48px] !font-extrabold !text-body-normal">
                Сохранить
            </Button>
        </FormProvider>
    );
};

export default observer(ProfileForm);
