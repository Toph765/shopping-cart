import { Link } from "react-router-dom"

const EmptyCart = () => {
    return (
        <div>
            <p>Your cart is empty~</p>
            <Link to="/shoppage">Let's go Shopping!</Link>
        </div>
    )
};

export default EmptyCart;