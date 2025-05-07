import App from "./App/App";
import HomePage from "./HomePage/HomePage";
import ShopPage from "./ShopPage/ShopPage";
import Cart from "./Cart/Cart";
import ErrorPage from "./ErrorPage/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "homepage", element: <HomePage /> },
            { path: "shoppage", element: <ShopPage /> },
            { path: "cart", element: <Cart />}
            ]
    },
];

export default routes;