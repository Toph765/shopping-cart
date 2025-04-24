import { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard";
import EmptyCart from "./EmptyCart";

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

        const total = list.reduce((accumulator, value) => accumulator + value, 0);

        return (
            <div>
                <p>Total: {total}</p>
                <button onClick={e => handleCheckOutBtn(e)}>Check Out</button>
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
        <div>
            <dialog ref={reference}>
                <p>Thank you for Shopping!</p>
                <button onClick={(e) => handleHomeBtn(e)}>Home</button>
                <button onClick={(e) => handleShopBtn(e)}>Shop</button>
            </dialog>
            {cart.length === 0 ? (
                <EmptyCart/>
            ) : (
                    <>
                    {cart.map((obj) => {
                        return (
                            <div key={obj.id}>
                                <ItemCard obj={obj} cart={cart} onChange={handleSetCart} />
                            </div>
                            
                        );
                    })}
                    {displayTotal()}
                    </>
            )}
        </div>
    )
};

export default Cart;