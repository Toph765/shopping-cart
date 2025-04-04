const Card = ({obj}) => {
    return (
        <div>
            {console.log("card")}
            <img src={obj.image} alt={obj.category} />
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

