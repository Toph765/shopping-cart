import { useRef } from "react";
import styles from "./Cart.module.css";

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

    const computeTotal = (x, y) => {
        const temp = x * y;
        const total = parseFloat(temp.toFixed(2));
        return (
            <p>${total}</p>
            )
    }

    return (
        <div>
            <dialog className={styles.dialog} ref={delRef}>
                <div className={styles.dialogTxt}>
                    <p>{`Do you want to remove item/s?`}</p>
                    <div>
                        <button className={styles.dialogBtn} onClick={(e) => handleDelBtn(e)}>yes</button>
                        <button className={styles.dialogBtn} onClick={closeDelMsg}>cancel</button>
                    </div>
                </div>
            </dialog>
            <div className={styles.card}>
                <img className={styles.img} src={obj.image} alt={obj.title} />
                <div className={styles.text}>
                    <button className={styles.removeBtn} onClick={openDelMsg}>X</button>
                    <div>
                        <p className={styles.title}>{obj.title}</p>
                        <p>{'$' + obj.price}</p>
                    </div>
                    <div>
                        <form>
                            <button  className={styles.inputBtn} onClick={(e) => handleDecBtn(e)}>-</button>
                            <input className={styles.input} type="number" value={obj.count} onChange={e => handleInputChange(e)}/>
                            <button className={styles.inputBtn} onClick={(e) => handleIncBtn(e)}>+</button>
                        </form>
                        {computeTotal(obj.count, obj.price)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemCard;