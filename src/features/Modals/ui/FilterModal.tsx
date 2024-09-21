import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal';
import {useForm} from "react-hook-form";
import {FormProvider} from "shared/ui/FormProvider";
import Button from "shared/ui/UI/Button/Button.tsx";
import {RHFSelect} from "shared/ui/RHFSelect";
import {adv_type} from "pages/AdvtPage/models";
import {genreApi} from "entities";
import {locationApi} from "../../../entities/Location";

interface FilterModalProps {
    isOpen: boolean;
    close(): void;
    onReset(): void;
    onAccept(data: any): void;
}

const FilterModal = ({isOpen, close, onAccept, onReset}: FilterModalProps) => {

    const methods = useForm({
        defaultValues: {
            genre: [],
            locations: [],
            type: []
        }
    })

    const {data: genres} = genreApi.useGetGenresQuery()
    const {data: locations} = locationApi.useGetLocationsQuery()

    const {handleSubmit, reset} = methods

    const onSubmit = async (formValues: any) => {
        onAccept(formValues)
        close()
    }

    const onResetLocal = () => {
        reset()
        onReset()
        close()
    }

    return (
        <Modal open={isOpen} onClose={close} center focusTrapped={false}  >
            <FormProvider methods={methods}
                          onSubmit={handleSubmit(onSubmit)}
                          className="mt-[12px] flex flex-col gap-y-[12px] !font-manrope h-[350px]">
                <RHFSelect isMulti  label={'Жанр'} name={'genre'} options={genres?.length ? genres.map(genre => {
                    return {
                        label: genre.name,
                        value: String(genre.id)
                    }
                }) : []}/>
                <RHFSelect isMulti  label={'Локации'} name={'locations'} options={locations?.length ? locations.map(genre => {
                    return {
                        label: genre.name,
                        value: String(genre.id)
                    }
                }) : []}/>
                <RHFSelect isMulti  label={'Тип объявления'} name={'type'} options={adv_type}/>
                <Button type="button" onClick={onResetLocal} variant="text" className="mt-auto h-[48px] !font-extrabold !text-body-normal">
                    Сбросить
                </Button>
                <Button type="submit" className=" h-[48px] !font-extrabold !text-body-normal">
                    Применить
                </Button>
            </FormProvider>
        </Modal>
    );
};

export default FilterModal;
