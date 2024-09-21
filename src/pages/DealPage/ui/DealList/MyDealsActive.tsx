import {DealCard} from "features";
import {dealApi} from "entities";

const MyDealsActive = () => {

    const {data: myDealsActive} = dealApi.useGetMyDealsActiveQuery()

    return (
        <>
            {myDealsActive?.filter(el => el.deal_status !== 'Finished')?.length ?  myDealsActive.filter(el => el.deal_status !== 'Finished')?.map(el => {
                return <DealCard card={el} key={el.id} />
            }) : 'У вас пока нет активных сделок'}
        </>
    );
};

export default MyDealsActive;