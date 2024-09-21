import {MainLayout} from "widgets";
import ProfileForm from "./ProfileForm.tsx";

const ProfileEditPage = () => {
    return (
        <MainLayout>
            <h2 className="text-header-h2 font-extrabold">Мои контакты</h2>
            <ProfileForm/>
        </MainLayout>
    );
};

export default ProfileEditPage;
