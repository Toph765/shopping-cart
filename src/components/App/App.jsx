import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import styles from "./App.module.css";

function App() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const src = await response.json();
        setProducts(src);
      }
      catch (error) {
        console.log(error);
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
      console.log("from app", item.count, temp[index].count);
      temp[index].count = temp[index].count + item.count;
      setCart(temp);
    }
  }

  const handleSetCart = (item) => {
    setCart(item);
  }

  return (
    <div>
      <nav className={styles.nav}>
        <Link className={styles.link} to="homepage">Home </Link>
        <Link className={styles.link} to="shoppage">Shop </Link>
        <Link className={styles.link} to="cart">Cart</Link>
        <div>
          {cart.length > 0 && cart.length}
        </div>
      </nav>
      <Outlet context={{products, cart, handleSetCart, addToCart}}/>
    </div>
  )
}

export default App
