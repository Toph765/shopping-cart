import { useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard";

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
            {cart && (cart.map((obj) => {
                return (
                    <ItemCard key={obj.id} obj={obj} cart={cart} onChange={handleSetCart} />
                );
            }))}
            {cart && displayTotal()}
        </div>
    )
};

export default Cart;