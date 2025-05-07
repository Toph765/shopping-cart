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
            <dialog ref={dialogRef} className={styles.dialog}>
                <div className={styles.cartDialog}>
                    <img src={obj.image} alt={obj.category} className={styles.dialogImg} />
                    <div className={styles.dialogText}>
                        <div>
                            <button onClick={closeModal} className={styles.close}>X</button>
                            <p className={styles.dialogTitle}>{obj.title}</p>
                            <p>{"$" + obj.price}</p>
                            <p>rating: {obj.rating.rate + "/5"} {`(${obj.rating.count})`}</p>
                            <p className={styles.description}>{obj.description}</p>
                        </div>
                        <form>
                            <button onClick={decNumber} className={styles.inputBtn}>-</button>
                            <input className={styles.input} type="number" value={number} min="1" onChange={(e) => handleInputChange(e)}/>
                            <button onClick={incNumber} className={styles.inputBtn}>+</button>
                            <button className={styles.addBtn} onClick={e => handleAddToCartBtn(e)}>Add to Cart</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <dialog ref={testRef} className={styles.message}>
                <div className={styles.msgCont}>
                    <p>Added to cart!</p>
                    <button className={styles.okay} onClick={closeTest}>okay</button>
                </div>
            </dialog>
            
            <div className={styles.card} onClick={openModal}>
                <div className={styles.firstCont}>
                    <img src={obj.image} alt={obj.category} className={styles.img} />
                    <p className={styles.title}>{obj.title}</p>
                </div>
                <div className={styles.secondCont}>
                    <p className={styles.rating}>rating: {obj.rating.rate + "/5"} {`(${obj.rating.count})`}</p>
                    <p className={styles.price}>{"$" + obj.price}</p>
                </div>
            </div>
        </div>
    )
};

export default Card;

