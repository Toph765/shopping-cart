import { useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard";

const Cart = () => {
    const { cart, setCart } = useOutletContext();

    return (
        <div>
            {cart && (cart.map((obj) => {
                return (
                    <ItemCard key={obj.id} obj={obj} cart={cart} setCart={setCart} />
                );
                }))}
        </div>
    )
};

export default Cart;