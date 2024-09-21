import {MainLayout} from "widgets";
import AdvtForm from "./AdvtForm.tsx";
import {useParams} from "react-router-dom";
import {advApi} from "entities";

const AdvtEditPage = () => {

    const {id} = useParams()

    const {data} = advApi.useGetAdvQuery(String(id))

    return (
        <MainLayout >
            <h2 className="text-header-h2 font-extrabold">Редактирование объявления</h2>
            <AdvtForm data={data}/>
        </MainLayout>
    );
};

export default AdvtEditPage;