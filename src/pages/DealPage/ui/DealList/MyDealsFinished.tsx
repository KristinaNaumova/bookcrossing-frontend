import {DealCard} from "features";
import {dealApi} from "entities";

const MyDealsFinished = () => {

    const {data: myDealsFinished} = dealApi.useGetMyDealsFinishedQuery()

    return (
        <>
            {myDealsFinished?.filter(el => el.deal_status === 'Finished')?.length ?  myDealsFinished?.filter(el => el.deal_status === 'Finished')?.map(el => {
                return <DealCard card={el} key={el.id} />
            }) : 'У вас пока нет завершённых сделок'}
        </>
    );
};

export default MyDealsFinished;