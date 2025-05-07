import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const EmptyCart = () => {
    return (
        <div className={styles.emptyMsg}>
            <p>Your cart is empty~</p>
            <Link className={styles.link} to="/shoppage">Let's go Shopping!</Link>
        </div>
    )
};

export default EmptyCart;