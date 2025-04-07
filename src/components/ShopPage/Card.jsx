import styles from "./ShopPage.module.css";
import { useState } from "react";

const Card = ({ obj }) => {
    const [number, setNumber] = useState(1);

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
            <button>Add to Cart</button>
            </form>
        </div>
    )
};

export default Card;

