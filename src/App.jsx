import { useState, useEffect } from 'react'
import './App.css'
import { Outlet, Link } from 'react-router-dom'

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
      temp[index].count = temp[index].count + item.count;
      setCart(temp);
    }
  }

  return (
    <>
      <nav>
        <Link to="homepage">Home</Link>
        <Link to="shoppage">Shop</Link>
        <Link to="cart">Cart</Link>
      </nav>
      <Outlet context={{products, cart, addToCart}}/>
    </>
  )
}

export default App
