import { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard";
import EmptyCart from "./EmptyCart";
import styles from "./Cart.module.css";

const Cart = () => {
    const { cart, handleSetCart } = useOutletContext();
    const reference = useRef(null);
    const homeNav = useNavigate();
    const shopNav = useNavigate();

    const handleCheckOutBtn = (e) => {
        e.preventDefault();

        handleSetCart([]);
        reference.current.showModal();
    }

    const displayTotal = () => {
        const list = [];

        cart.forEach(item => {
            const itemPrice = item.count * item.price;
            list.push(itemPrice);
        });

        const temp = list.reduce((accumulator, value) => accumulator + value, 0);

        const total = parseFloat(temp.toFixed(2));

        return (
            <div className={styles.total}>
                <p className={styles.totalTxt}>Total: {'$' + total}</p>
                <button className={styles.checkOutBtn} onClick={e => handleCheckOutBtn(e)}>Check Out</button>
            </div>
        );
    }

    const handleHomeBtn = (e) => {
        e.preventDefault();

        homeNav('/homepage');
        reference.current.close();
    }

    const handleShopBtn = (e) => {
        e.preventDefault();

        shopNav('/shoppage');
        reference.current.close();
    }

    return (
        <div className={styles.container}>
            <dialog className={styles.dialog} ref={reference}>
                <div className={styles.dialogTxt}>
                    <p>Thank you for Shopping!</p>
                    <div>
                        <button className={styles.dialogBtn} onClick={(e) => handleHomeBtn(e)}>Home</button>
                        <button className={styles.dialogBtn} onClick={(e) => handleShopBtn(e)}>Shop</button> 
                    </div>
                </div>
                
                
            </dialog>
            {cart.length === 0 ? (
                <EmptyCart/>
            ) : (
                    <div className={styles.cart}>
                    {cart.map((obj) => {
                        return (
                            <div key={obj.id}>
                                <ItemCard obj={obj} cart={cart} onChange={handleSetCart} />
                            </div>
                            
                        );
                    })}
                    {displayTotal()}
                    </div>
            )}
        </div>
    )
};

export default Cart;