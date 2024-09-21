import {Icon} from '@iconify/react';
import {Link, useNavigate} from "react-router-dom";

const Header = ({back}: {back: boolean}) => {

    const navigate = useNavigate()

    const onBack = () => {
        navigate(-1)
    }

    return (
        <header className="h-[56px] bg-white z-50 w-full p-[8px] flex items-center fixed left-0 right-0 top-0">
            {
                back ? <button onClick={onBack} className="h-full  mr-[24px]">
                    <Icon  className="text-accent ml-[8px]" icon="uil:arrow-left" height={24} width={24}/>
                </button> : null
            }
            <Link to={'/'}><img  src="/icons/logo.svg" alt="Logo"/></Link>
            <div
                className="w-[80px] h-[40px] bg-black/20 ml-auto rounded-[8px] p-[8px] flex items-center justify-between">
                <Icon icon={'uil:ellipsis-v'} height={24} width={24} className="text-white"/>
                <Icon icon={'uil:times'} height={24} width={24} className="text-white"/>
            </div>
        </header>
    );
};

export default Header;