import { MainLayout } from "widgets";
import { MainCard } from "features";
import { useEffect, useState } from "react";
import advApi from "entities/Adv/models/redux/advApi";

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState<number[]>([]);

    console.log('favorites', favorites)

    const { data: myFavorites } = advApi.useGetFavoritesByIdsQuery(favorites, {
        skip: favorites.length === 0, // Пропускаем запрос, если нет избранных
    });

    useEffect(() => {
        // Получаем избранные ID из localStorage при монтировании компонента
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(storedFavorites);
    }, []);

    return (
        <MainLayout>
            <h2 className="text-header-h2 font-extrabold">Избранное</h2>
            <div className="mt-[16px] flex flex-col gap-y-[16px] overflow-y-auto p-[4px]">
                {myFavorites?.length ? myFavorites?.map(el => {
                    return <MainCard cardClassName="last:mb-[30%]" card={el} key={el.id} />
                }) : 'У вас пока нет избранных объявлений'}
            </div>
        </MainLayout>
    );
};

export default FavoritesPage;
