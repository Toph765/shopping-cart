import styles from "./ShopPage.module.css";

const Card = ({ obj }) => {
    return (
        <div>
            <img src={obj.image} alt={obj.category} className={styles.img} />
            <p>{obj.title}</p>
            <p>rating: {obj.rating.rate + "/5"} {`(${obj.rating.count})`}</p>
            <p>{obj.description}</p>
            <p>{"$" + obj.price}</p>
            <div>
                <button>-</button>
                <input type="text" />
                <button>+</button>
            </div>
            <button>Add to Cart</button>
        </div>
    )
};

export default Card;

