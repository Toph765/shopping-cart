import { useOutletContext } from "react-router-dom";
import Card from "./Card";

const ShopPage = () => {
    const { products } = useOutletContext();

    return (
        <div>
            {products && (products.map((obj) => {
                return (<div key={obj.id}>
                    <Card obj={obj} />
                </div>)
            }))}
        </div>
    )
};

export default ShopPage;