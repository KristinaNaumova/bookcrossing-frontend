import {MainLayout} from "widgets";
import Button from "shared/ui/UI/Button/Button.tsx";
import {genreApi} from "entities";
import Loader from "shared/ui/Loader/Loader.tsx";
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "app/providers/MobX/store/store.ts";
import toast from "react-hot-toast";
import {useAuthContext} from "../../../app/context/AuthContext.tsx";

const GenrePage = () => {

    const {authStore} = useStore();
    const {data, isLoading} = genreApi.useGetGenresQuery()
    const {user} = authStore
    const {onSetUser} = useAuthContext()
    const [updateMyGenres] = genreApi.useUpdateMyGenresMutation()

    const [myGenres, setMyGenres] = useState<{ id: number }[]>([])

    const onChangeGenres = (id: number) => () => {
        setMyGenres(prev => {
            if (prev.find(el => el.id === id)) {
                return prev.filter(el => el.id !== id)
            }

            return [...prev, {id}]
        })
    }

    const onSave = async () => {
        updateMyGenres({genres: myGenres}).unwrap().then(() => {
            toast.success('Любимые жанры сохранены')
            onSetUser()
        })
    }

    useEffect(() => {
        const ids = user?.genres.map(el => {
            return el.id
        })
        if (ids?.length)
            setMyGenres(ids.map(el => ({id: el})))
    }, [user]);

    return (
        <MainLayout  navigation={false}>
            <h2 className="text-header-h2 font-extrabold">Выберите любимые жанры:</h2>
            <div className="mt-[31px] flex flex-wrap gap-y-[16px] gap-x-[4px]">
                {
                    isLoading ? <Loader/> : data?.length ? data.map(genre => {
                        return <Button key={genre.name} onClick={onChangeGenres(genre.id)}
                                       variant={!!myGenres.find(el => el.id === genre.id) ? "primary" : "text"}
                                       className="rounded-lg">
                            {genre.name}
                        </Button>
                    }) : null
                }
            </div>
            <Button onClick={onSave} className="mt-auto h-[48px] !font-extrabold !text-body-normal mb-[10%]">
                Сохранить
            </Button>
        </MainLayout>
    );
};

export default observer(GenrePage);