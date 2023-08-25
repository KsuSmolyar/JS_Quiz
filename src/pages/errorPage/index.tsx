import styles from './errorpage.module.css';
import { useRouteError } from "react-router-dom";

type ErrorType = {
  statusText: string;
  message: string;
}

const ErrorPage = () => {
  const error = useRouteError() as ErrorType;
  console.error(error);

  return (
    <div className={styles.errorPage} id="error-page">
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>
      <i>{error.statusText || error.message}</i>
    </p>
  </div>
  )
}

export default ErrorPage;
