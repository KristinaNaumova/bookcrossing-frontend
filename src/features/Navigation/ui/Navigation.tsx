import {Icon} from "@iconify/react";
import {navigation} from "../model";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="shadow-nav fixed bottom-[5%] bg-white z-50 left-[16px] right-[16px] h-[56px] rounded-[8px] py-[8px] px-[16px] flex items-center justify-between">
            {
                navigation.map(nav => {
                    return <Link key={nav.route} to={nav.route} className="w-[56px] h-[40px] flex flex-col items-center justify-between">
                        <Icon icon={nav.name} width={24} height={24} className="text-accent2" />
                        <span className="text-xs text-accent2">{nav.label}</span>
                    </Link>
                })
            }
        </div>
    );
};

export default Navigation;