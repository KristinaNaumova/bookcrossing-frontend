import FormProvider from "shared/ui/FormProvider/ui/FormProvider.tsx";
import {useForm, useWatch} from "react-hook-form";
import {RHFTextField} from "shared/ui/RHFTextField";
import RHFTextarea from "shared/ui/RHFTextarea/ui/RHFTextarea.tsx";
import Button from "shared/ui/UI/Button/Button.tsx";
import {RHFSelect} from "shared/ui/RHFSelect";
import {adv_type} from "../models";
import {RHFDate} from "shared/ui/RHFDate";
import {z, ZodType} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {AdvCreate} from "entities/Adv/models/types/adv.ts";
import {advApi, genreApi} from "entities";
import {useEffect} from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {getProfileMy} from "../../../shared/config/routeConfig.tsx";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

// Подключаем плагины
dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.extend(utc);

dayjs.extend(timezone);

dayjs.tz.setDefault("Europe/Moscow")


const defaultValues = {
    book_author: '',
    book_name: '',
    comment: '',
    deadline: new Date(),
    description: '',
    genre: '',
    type: "Rent"
}

 const AdvtSchema: ZodType = z
    .object({
        book_author: z.string().min(3, 'Обязательное поле'),
        book_name: z.string().min(3, 'Обязательное поле'),
        type: z.string().min(1, 'Обязательное поле'),
        description: z.string().nullable(),
        comment: z.string().nullable(),
        genre: z.string().min(1, 'Обязательное поле').nullable(),
        deadline: z.date().optional(),
    })
    .superRefine((data, ctx) => {
        if (data.type === 'Rent' && !data.deadline) {
            // @ts-ignore
            ctx.addIssue({
                // @ts-ignore
                path: ['deadline'],
                // @ts-ignore
                message: "Срок является обязательным для Аренды",
            });
        } else if (data.type === 'Rent' && data.deadline && data.deadline < new Date()) {
            // @ts-ignore
            ctx.addIssue({
                // @ts-ignore
                path: ['deadline'],
                // @ts-ignore
                message: "Срок не может быть меньше текущей даты и времени.",
            });
        }
    });


const AdvtForm = ({ data }: { data?: any }) => {

    const [createAdv] = advApi.useCreateAdvMutation();
    const [editAdv] = advApi.useEditAdvMutation();
    const { data: genres } = genreApi.useGetGenresQuery();
    const navigate = useNavigate();

    const methods = useForm<any>({
        defaultValues, mode: 'onBlur',
        resolver: zodResolver(AdvtSchema)
    });

    const { handleSubmit, reset, formState: { isSubmitting, isValid }, control } = methods;

    // Слежение за изменением поля `type`
    const selectedType = useWatch({
        control,
        name: 'type',
    });

    const onSubmit = async (formValues: AdvCreate & { genre: string }) => {
        const values = {
            ...formValues,
            genres: [{ id: Number(formValues.genre) }]
        };
        const utcPlus3Deadline = dayjs(values.deadline).tz('Europe/Moscow').toDate();
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;


        if (data) {
            await editAdv({ ...values, id: data.id, timezone: userTimezone  }).unwrap();
            toast.success('Объявление сохранено!');
        } else {
            await createAdv({
                ...values,
                deadline: utcPlus3Deadline,
                timezone: userTimezone
            }).unwrap();
            toast.success('Объявление создано!');
            navigate(getProfileMy());
        }
    };

    useEffect(() => {
        if (data) {
            reset({
                book_author: data.book_author,
                book_name: data.book_name,
                comment: data.comment,
                deadline: new Date(data.deadline),
                description: data.description,
                genre: String(data?.genres[0]?.id),
                type: data.type
            });
        }
    }, [data]);

    return (
        <FormProvider methods={methods}
                      onSubmit={handleSubmit(onSubmit)}
                      className="mt-[12px] flex flex-col gap-y-[12px]">
            <RHFTextField label={'Название книги'} name={'book_name'} helperText={""} />
            <RHFTextField label={'Автор'} name={'book_author'} helperText={""} />
            <RHFSelect label={'Жанр'} name={'genre'} options={genres?.length ? genres.map(genre => {
                return {
                    label: genre.name,
                    value: String(genre.id)
                };
            }) : []} />
            <RHFTextarea label={'Краткое описание книги'} name={'description'} helperText={""} />
            <RHFTextarea label={'Комментарий'} name={'comment'} helperText={""} />
            <RHFSelect label={'Действие'} name={'type'} options={adv_type} />

            {/* Показываем поле `deadline` только если `type` равен "Rent" */}
            {selectedType == "Rent" && (
                <RHFDate label={'Срок'} name={'deadline'} />
            )}

            <Button disabled={isSubmitting || !isValid} type="submit" className="mt-[20px] h-[48px] !font-extrabold !text-body-normal">
                {data ? 'Сохранить' : 'Создать'}
            </Button>
        </FormProvider>
    );
};

export default AdvtForm;