import styles from "./ShopPage.module.css";
import { useState } from "react";

const Card = ({ obj, addToCart }) => {
    const [number, setNumber] = useState(1);

    const product = {
        "id": obj.id,
        "title": obj.title,
        "image": obj.image,
        "price": obj.price,
    };

    const incNumber = (e) => {
        e.preventDefault();
        setNumber(n => parseInt(n) + 1);
    }

    const decNumber = (e) => {
        e.preventDefault();
        if (number > 1) setNumber(n => parseInt(n) - 1);
    }

    const handleInputChange = (e) => {
        const { value } = e.target;
        setNumber(value);
    }

    const handleAddToCartBtn = (e) => {
        e.preventDefault();
        product["count"] = number;
        console.log("from cart", product.count);
        addToCart(product);
        setNumber(1);
    }

    return (
        <div>
            <img src={obj.image} alt={obj.category} className={styles.img} />
            <p>{obj.title}</p>
            <p>rating: {obj.rating.rate + "/5"} {`(${obj.rating.count})`}</p>
            <p>{obj.description}</p>
            <p>{"$" + obj.price}</p>
            <form>
                <div>
                    <button onClick={decNumber}>-</button>
                    <input type="number" value={number} min="1" onChange={(e) => handleInputChange(e)}/>
                    <button onClick={incNumber}>+</button>
                </div>
            <button onClick={e => handleAddToCartBtn(e)}>Add to Cart</button>
            </form>
        </div>
    )
};

export default Card;

