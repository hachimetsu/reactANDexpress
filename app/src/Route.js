import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Homepage  from "./pages/Homepage";
import Aboutpage  from "./pages/Aboutpage";
import Itempage  from "./pages/Itempage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "/about",
        element: <Aboutpage />
    },
    {
        path: "/items",
        element: <Itempage />
    }
]);

export default function Router () {
   return <RouterProvider router={router} />
}