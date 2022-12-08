import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Homepage  from "./pages/Homepage";
import Aboutpage  from "./pages/Aboutpage";
import Itempage  from "./pages/Itempage";
import Errorpage  from "./pages/Errorpage";
// import Adminpage from "./pages/Adminpage";
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
    },
    {
        path: "*",
        element: <Errorpage />
    }
]);

export default function Router () {
   return <RouterProvider router={router} />
}