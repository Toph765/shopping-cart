import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import styles from "./App.module.css";

function App() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }

        const src = await response.json();
        setProducts(src);
      }
      catch (error) {
        setError(error.message);
        setProducts(null);
      }

      finally {
        setLoading(false);
      }

    }

    getProducts();
  }, [])

  const checkCart = (item) => {
    const temp = [...cart];
    const filteredTemp = temp.filter(unit => unit.id === item.id);
    return filteredTemp.length === 0 ? false : true;

  }

  const addToCart = (item) => {
    const temp = [...cart];

    if (!checkCart(item)) setCart(unit => [...unit, item]);
    else {
      const index = temp.findIndex(unit => unit.id === item.id);
      temp[index].count = temp[index].count + item.count;
      setCart(temp);
    }
  }

  const handleSetCart = (item) => {
    setCart(item);
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link className={styles.link} to="homepage">Home </Link>
        <Link className={styles.link} to="shoppage">Shop </Link>
        <Link className={styles.link} to="cart">Cart</Link>
        <div className={styles.count}>
          {cart.length > 0 && (<p className={styles.p}>{cart.length}</p>)}
        </div>
      </nav>
      <main className={styles.main}>
        <Outlet context={{products, cart, handleSetCart, addToCart, loading, error}}/>
      </main>
    </div>
  )
}

export default App
