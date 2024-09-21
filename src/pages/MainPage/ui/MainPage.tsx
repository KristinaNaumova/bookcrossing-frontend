import { MainLayout } from "widgets";
import { MainCard, Search } from "features";
import InfiniteScroll from 'react-infinite-scroll-component';
import { FilterIcon } from "shared/ui/Icon/Icons.tsx";
import { advApi } from "entities";
import Loader from "shared/ui/Loader/Loader.tsx";
import { useState, useMemo, useCallback, useEffect } from "react";
import Sort from "./Sort.tsx";
import FilterModal from "../../../features/Modals/ui/FilterModal.tsx";

export type SORT = 'AlphabetDesc' | 'AlphabetAsc' | 'DateDesc' | 'DateAsc' | 'Rating' | 'Preferences';

const MainPage = () => {
    const [filterState, setFilterState] = useState({
        word: '',
        page: 1,
        sort: 'AlphabetAsc' as SORT,
        type: null as string | string[] | null,
        genres: null as string | string[] | null,
        locations: null as string | string[] | null,
    });

    const [openFilter, setOpenFilter] = useState<boolean>(false);

    // Сохраняем загруженные данные и страницу для предотвращения дублирования
    const [ads, setAds] = useState<any[]>([]);
    const [hasMore, setHasMore] = useState(true);

    const { data, isLoading } = advApi.useGetAllAdvQuery(filterState);

    // Когда данные приходят, обновляем список объявлений и проверяем пагинацию
    useEffect(() => {
        if (data) {
            if (filterState.page === 1) {
                setAds(data.ads); // Обновляем, если это первая страница
            } else {
                setAds(prev => [...prev, ...data.ads]); // Добавляем к существующим
            }
            setHasMore(data.pagination.pagesCount > filterState.page); // Проверяем, есть ли ещё страницы
        }
    }, [data, filterState.page]);

    const onDebounceSearch = useCallback((value: string) => {
        setFilterState(prevState => ({ ...prevState, word: value, page: 1 }));
    }, []);

    const onDebounceSort = useCallback((value: string) => {
        setFilterState(prevState => ({ ...prevState, sort: value as SORT, page: 1 }));
    }, []);

    // Загружаем следующую страницу
    const loadFunc = useCallback(() => {
        if (!isLoading && hasMore) {
            setFilterState(prevState => ({ ...prevState, page: prevState.page + 1 }));
        }
    }, [isLoading, hasMore]);

    const onReset = useCallback(() => {
        setFilterState(prevState => ({
            ...prevState,
            type: null,
            genres: null,
            locations: null,
            page: 1,
        }));
    }, []);

    const onCloseFilter = useCallback(() => setOpenFilter(false), []);
    const onOpenFilter = useCallback(() => setOpenFilter(true), []);

    const handleAcceptFilter = useCallback((values: { type?: string | string[], genre?: string | string[], locations: string | string[] }) => {
        setFilterState(prevState => ({
            ...prevState,
            type: values?.type || null,
            genres: values?.genre || null,
            locations: values?.locations || null,
            page: 1,
        }));
    }, []);

    const renderContent = useMemo(() => {
        if (isLoading && filterState.page === 1) {
            return (
                <div className="mt-[16px] flex flex-col gap-y-[16px] overflow-y-auto p-[4px]">
                    <Loader />
                </div>
            );
        }

        if (ads.length) {
            return (
                <InfiniteScroll
                    dataLength={ads.length}
                    className="mt-[16px] flex flex-col gap-y-[16px] overflow-y-auto p-[4px]"
                    next={loadFunc}
                    hasMore={hasMore}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    {ads.map(ad => (
                        <MainCard cardClassName="last:mb-[30%]" card={ad} key={ad.id} />
                    ))}
                </InfiniteScroll>
            );
        }

        return 'Таких объявлений нет';
    }, [ads, isLoading, loadFunc, hasMore]);

    return (
        <MainLayout>
            <div className="grid grid-cols-[3.5fr_1fr] gap-[24px]">
                <Search handleDebounce={onDebounceSearch} debounceTimeout={500} />
                <div className="flex items-center gap-[16px]">
                    <Sort handleDebounce={onDebounceSort} debounceTimeout={500} />
                    <FilterIcon onClick={onOpenFilter} />
                </div>
            </div>
            {renderContent}
            <FilterModal
                onReset={onReset}
                isOpen={openFilter}
                close={onCloseFilter}
                onAccept={handleAcceptFilter}
            />
        </MainLayout>
    );
};

export default MainPage;
