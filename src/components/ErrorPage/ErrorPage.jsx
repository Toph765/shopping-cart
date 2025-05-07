import { Link } from "react-router-dom"
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
    return (
        <div className={styles.container}>
            <p className={styles.msg}>{`Something wentwrong :(`}</p>
            <Link className={styles.link} to="/">Home</Link>
        </div>
    )
}

export default ErrorPage;