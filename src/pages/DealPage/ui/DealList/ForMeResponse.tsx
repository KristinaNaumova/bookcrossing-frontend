import {MainCard} from "features";
import {dealApi} from "entities";

const ForMeResponse = () => {

    const {data: forMeResponse} = dealApi.useGetForMeResponseQuery()

    return (
        <>
            {forMeResponse?.length ?  forMeResponse?.map(el => el.ad).map(el => {
                return <MainCard requestPage card={el} key={el.id} />
            }) : 'Вам пока не поступало заявок на обмен'}
        </>

    );
};

export default ForMeResponse;