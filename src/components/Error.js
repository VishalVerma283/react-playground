import { useRouteError, Link } from "react-router";

const ErrorPage = () => {
    const err = useRouteError();
    // console.log(err)
    return (
        <div className="error-page">
            <div className="error-content">

                <div className="error-icon">
                    🍽️
                </div>

                <h1>Oops!</h1>

                <h2>{err.status} {err.statusText}</h2>

                <p>
                    We couldn't find the page you're looking for.
                    It might have been removed or temporarily unavailable.
                </p>

                <Link
                    className="error-btn"
                   to="/"
                >
                    Go Back Home
                    <span>→</span>
                </Link>

                <div className="error-code">
                    ERROR 404
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;