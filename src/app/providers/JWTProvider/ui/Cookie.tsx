import  { useState, useEffect } from 'react';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasAcceptedCookies = localStorage.getItem('hasAcceptedCookies3');
        if (!hasAcceptedCookies) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('hasAcceptedCookies3', 'true');
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-4 left-4 right-4 bg-white text-gray-800 p-6 shadow-lg rounded-lg flex items-center justify-between z-50 border border-gray-200">
            <div className="flex items-center">
                <span className="text-sm">
                    Продолжая использовать это мини-приложение, вы соглашаетесь, что оно собирает и обрабатывает ваши персональные данные.
                </span>
            </div>
            <button
                onClick={acceptCookies}
                className="rounded-[4px] h-[32px] px-[16px] py-[8px] text-footnote-normal font-extrabold text-white bg-accent2 ml-6"
            >
                Ок
            </button>
        </div>
    );
};

export default CookieBanner;
