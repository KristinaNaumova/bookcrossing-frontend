
const ErrorPage = () => {

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div>
            <p>Произошла непредвиденная ошибка</p>
            <button onClick={reloadPage}>
                Обновить страницу
            </button>
        </div>
    );
};

export default ErrorPage;
