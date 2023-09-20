import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const erroR = useRouteError();
    const navigate = useNavigate()
    const {status, statusText, error} = erroR;
    console.log(error);
    const handleBack = () => {
        navigate(-1); //-1 for one step back navigation
    }
    return (
        <div>
            <h2>Something unexpected happened</h2>
            <h1>{status}: {statusText}</h1>
            <p>{error.message}</p>
            <button  onClick={handleBack}>Go BAck</button>
        </div>
    );
};

export default ErrorPage;