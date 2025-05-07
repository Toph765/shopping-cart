import { useOutletContext } from "react-router-dom";
import Card from "./Card";
import styles from "./ShopPage.module.css";

const ShopPage = () => {
    const { products, addToCart, loading, error } = useOutletContext();

    return (
        <div>
            {loading && (
                <div className={styles.loading}>
                    <p>Loading...</p>
                </div>
            )}

            {error && (
                <div className={styles.error}>
                    <p>{'Something went wrong :('}</p>
                    <p>{error}</p>
                </div>
            )}
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
        </div>
        
    )
};

export default ShopPage;