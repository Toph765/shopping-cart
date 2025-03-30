import App from "../App";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "homepage", element: <HomePage /> },
            { path: "Shoppage", element: <ShopPage /> },
            ]
    },
];

export default routes;