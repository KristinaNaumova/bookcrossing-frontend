import {userApi} from "entities";
import {Link} from "react-router-dom";
import {getRouteUser} from "shared/config/routeConfig.tsx";

const MainCardUser = ({userId}: {userId: string}) => {

    const {data: user} = userApi.useGetUserByIdQuery(userId)

    if (!user) {
        return null
    }

    return (
        <Link to={getRouteUser(Number(user.id))} className="self-start text-accent2 font-extrabold text-footnote-normal">
            {user.name}
        </Link>
    );
};

export default MainCardUser;