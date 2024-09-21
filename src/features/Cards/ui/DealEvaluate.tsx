import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z, ZodType} from "zod";
import clsx from "clsx";
import {FormProvider} from "shared/ui/FormProvider";
import {Icon} from "@iconify/react";
import {DealActive} from "entities/Deal/models/types/deal.ts";
import {dealApi} from "entities";

export const DealEvaluateSchema: ZodType = z
    .object({
        evaluate: z.number({
            message: 'Обязательное поле',
        }).min(1, 'Минимальная оценка - 1').max(10, 'Максимальная оценка - 10').positive(),
    })

interface DealEvaluateProps {
    deal: DealActive
    setEvaluateMode(val: boolean): void
}

const DealEvaluate = ({deal, setEvaluateMode}: DealEvaluateProps) => {

    const [evaluate] = dealApi.useEvaluateMutation()

    const methods = useForm<{
        evaluate: number
    }>({
        resolver: zodResolver(DealEvaluateSchema),
        mode: 'onSubmit'
    })

    const {register, handleSubmit, formState: {
        errors
    }} = methods

    const onSubmit = (data: { evaluate: number }) => {
        evaluate({id: deal.id, evaluation: data.evaluate}).unwrap().then(() => setEvaluateMode(false))
    }

    console.log(errors)

    return (
        <FormProvider methods={methods}
                      onSubmit={handleSubmit(onSubmit)} className="w-full"
                      >
            <div className="flex flex-col gap-2 w-full items-center">
                <div className=" mx-auto  items-center flex flex-row  rounded-[4px] h-[32px] bg-[#F5F7F9]">
                    <input
                        placeholder="Оценка (от 1 до 10)"
                        type="number" className={
                        clsx(
                            "px-[16px] py-[6px] text-hint text-body-normal  bg-transparent",
                        )
                    }
                        {...register('evaluate', {valueAsNumber: true})}
                    />
                    <button onClick={handleSubmit(onSubmit)}
                            className="w-[44px] h-full flex z-50 border-solid border-[#B8C2D0] border-l items-center justify-center">
                        <Icon icon="fluent-mdl2:accept-medium"/>
                    </button>
                </div>
                {errors?.evaluate ? <small className="text-body-small text-red  ">
                    {errors?.evaluate?.message}
                </small> : null}
            </div>
        </FormProvider>
    );
};

export default DealEvaluate;