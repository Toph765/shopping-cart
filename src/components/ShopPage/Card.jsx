import styles from "./ShopPage.module.css";
import { useState, useRef } from "react";

const Card = ({ obj, addToCart }) => {
    const [number, setNumber] = useState(1);

    const dialogRef = useRef(null);
    const testRef = useRef(null);

    const openModal = () => {
        dialogRef.current.showModal();
    }

    const closeModal = () => {
        dialogRef.current.close();
    }

    const openTest = () => {
        testRef.current.showModal();
    }

    const closeTest = () => {
        testRef.current.close();
    }

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
        addToCart(product);
        setNumber(1);
        closeModal();
        openTest();
    }

    return (
        <div>
            <dialog ref={dialogRef}>
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
                <button onClick={closeModal}>close</button>
            </dialog>

            <dialog ref={testRef}>
                <p>Added to cart!</p>
                <button onClick={closeTest}>okay</button>
            </dialog>
            
            <div onClick={openModal}>
                <img src={obj.image} alt={obj.category} className={styles.img} />
                <p>{obj.title}</p>
                <p>rating: {obj.rating.rate + "/5"} {`(${obj.rating.count})`}</p>
                <p>{"$" + obj.price}</p>
            </div>
        </div>
    )
};

export default Card;

