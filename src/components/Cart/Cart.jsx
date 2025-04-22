import { useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard";
import EmptyCart from "./EmptyCart";

const Cart = () => {
    const { cart, handleSetCart } = useOutletContext();

    const displayTotal = () => {
        const list = [];

        cart.forEach(item => {
            const itemPrice = item.count * item.price;
            list.push(itemPrice);
        });

        const total = list.reduce((accumulator, value) => accumulator + value, 0);

        return <p>Total: {total}</p>;
    }

    return (
        <div>
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