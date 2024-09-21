import {dealApi} from "entities";
import {MainCard} from "features";

const MyResponse = () => {

    const {data: myResponse} = dealApi.useGetMyResponseQuery()

    return (
        <>
            {myResponse?.length ? myResponse?.map(el => {
                return {...el.ad, proposed_book: el.proposed_book}
            }).map(el => {
                // @ts-ignore
                return <MainCard card={el} key={el.id}/>
            }) : 'У вас пока нет откликов'}
        </>
    );
};

export default MyResponse;