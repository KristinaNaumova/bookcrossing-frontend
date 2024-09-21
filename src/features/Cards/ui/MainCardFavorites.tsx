import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Adv } from "entities/Adv/models/types/adv.ts";

interface MainCardFavoritesProps {
    card: Adv;
}

const MainCardFavorites = ({ card }: MainCardFavoritesProps) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Проверяем, есть ли карточка в избранном при монтировании компонента
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorite(favorites.includes(card.id));
    }, [card.id]);

    const onAddToFavorite = (e: any) => {
        e.preventDefault();
        e.stopPropagation();

        // Получаем текущие избранные карточки
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

        // Добавляем текущую карточку
        const updatedFavorites = [...favorites, card.id];

        // Записываем в localStorage
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

        // Обновляем состояние
        setIsFavorite(true);
    };

    const onRemoveFromFavorite = (e: any) => {
        e.preventDefault();
        e.stopPropagation();

        // Получаем текущие избранные карточки
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

        // Убираем текущую карточку из избранного
        const updatedFavorites = favorites.filter((id: number) => id !== card.id);

        // Записываем в localStorage
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

        // Обновляем состояние
        setIsFavorite(false);
    };

    return (
        <>
            {isFavorite ?
                <Icon onClick={onRemoveFromFavorite} icon={'uil:heart-break'} className="text-red" width={24} height={24} />
                : <Icon onClick={onAddToFavorite} icon={'uil:heart-alt'} className="text-hint" width={24} height={24} />
            }
        </>
    );
};

export default MainCardFavorites;
