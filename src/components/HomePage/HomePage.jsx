import styles from './HomePage.module.css';
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HomePage = () => {
    const { products } = useOutletContext();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            index === products.length - 1 ? setIndex(0) : setIndex((n) => n + 1);
        }, 3000);

        return () => {
            clearInterval(interval);
        }
    }, [products, index])

    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.header}>E t - c e t e r a</h2>
                <p className={styles.text}>Random stuff you can buy!</p>
            </div>
            <div className={styles.carousel}>
                {products && (products.map((item, idx) => {
                    return (
                        <img
                            className={index === idx ? styles.img : `${styles.img} ${styles.imgHidden}`}
                            src={item.image}
                            alt={item.description}
                            key={idx} />
                    )
                }))}
                <span className={styles.indicators}>
                    {products && (products.map((_, idx) => {
                        return (
                            <button
                                key={idx}
                                className={idx === index ? styles.indicator : `${styles.indicator} ${styles.indicatorInactive}`}
                                onClick={() => setIndex(idx)}>
                            </button>
                        )
                    }))}
                </span>
            </div>
        </div>
    )
};

export default HomePage