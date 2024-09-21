import {MainLayout} from "widgets";
import AdvtForm from "./AdvtForm.tsx";

const AdvtCreatePage = () => {
    return (
        <MainLayout >
            <h2 className="text-header-h2 font-extrabold">Создание объявления</h2>
            <AdvtForm/>
        </MainLayout>
    );
};

export default AdvtCreatePage;