import { useRef } from "react";

const ItemCard = ({ obj, cart, onChange }) => {
    const delRef = useRef(null);

    const openDelMsg = () => {
        delRef.current.showModal();
    }

    const closeDelMsg = () => {
        delRef.current.close();
    }

    const handleIncBtn = (e) => {
        e.preventDefault();

        const temp = [...cart];
        const index = temp.findIndex(unit => unit.id === obj.id);
        temp[index].count = temp[index].count + 1;
        onChange(temp);
    }

    const handleDecBtn = (e) => {
        e.preventDefault();
        if (obj.count > 1) {
            
            const temp = [...cart];
            const index = temp.findIndex(unit => unit.id === obj.id);
            temp[index].count = temp[index].count - 1;
            onChange(temp);
        } else {
            openDelMsg();
        }
    }

    const handleInputChange = (e) => {
        let { value } = e.target;

        const temp = [...cart];
        const num = parseInt(value);
        const index = temp.findIndex(unit => unit.id === obj.id);
        !num ? temp[index].count = "" : temp[index].count = num;
        
        onChange(temp);
    }

    const handleDelBtn = (e) => {
        e.preventDefault();

        const temp = [...cart];
        const index = temp.findIndex(unit => unit.id === obj.id);
        temp.splice(index, 1);
        onChange(temp);
    }

    return (
        <div>
            <dialog ref={delRef}>
                <p>{`Do you want to remove item/s?`}</p>
                <div>
                    <button onClick={(e) => handleDelBtn(e)}>yes</button>
                    <button onClick={closeDelMsg}>cancel</button>
                </div>
            </dialog>
            <div>
                <button onClick={openDelMsg}>X</button>
                <img src={obj.image} alt={obj.title} />
                <p>{obj.title}</p>
                <p>{obj.price}</p>
                <form>
                    <button onClick={(e) => handleDecBtn(e)}>-</button>
                    <input type="number" value={obj.count} onChange={e => handleInputChange(e)}/>
                    <button onClick={(e) => handleIncBtn(e)}>+</button>
                </form>
                <p>{obj.count * obj.price}</p>
            </div>
        </div>
    )
};

export default ItemCard;