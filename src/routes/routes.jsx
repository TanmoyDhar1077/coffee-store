import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import Root from "../layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <div>Page not found</div>,
    children: [
      { index: true, Component: Home },
      {path: "/addCoffee", Component: AddCoffee },
      {path: "/updateCoffee", Component: UpdateCoffee },
      
]},
]);

export default router;