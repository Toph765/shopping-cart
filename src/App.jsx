import { useState, useEffect } from 'react'
import './App.css'
import { Outlet, Link } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState(null);

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

  return (
    <>
      <nav>
        <Link to="homepage">Home</Link>
        <Link to="shoppage">Shop</Link>
        <Link to="cart">Cart</Link>
      </nav>
      <Outlet context={{products}}/>
    </>
  )
}

export default App
