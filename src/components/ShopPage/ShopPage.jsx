import { useOutletContext } from "react-router-dom";
import Card from "./Card";
import styles from "./ShopPage.module.css";

const ShopPage = () => {
    const { products, addToCart } = useOutletContext();

    return (
        <div className={styles.container}>
            {products && (products.map((obj) => {
                return (
                    <Card
                        key={obj.id}
                        obj={obj}
                        addToCart={addToCart}
                    />
                )
            }))}
        </div>
    )
};

export default ShopPage;