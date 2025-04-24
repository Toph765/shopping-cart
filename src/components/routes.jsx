import App from "./App/App";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage/ShopPage";
import Cart from "./Cart/Cart";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "homepage", element: <HomePage /> },
            { path: "shoppage", element: <ShopPage /> },
            { path: "cart", element: <Cart />}
            ]
    },
];

export default routes;