import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Accomodation from "./pages/accomodation/Accomodation"
import About from "./pages/about/About"
import Notfound from "./pages/notfound/NotFound"


export const router = createBrowserRouter([

    {
        errorElement: <Notfound />,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
                path: "/:id",
                element: <Accomodation />
            },

            {
                path: "/about",
                element: <About />
            },
        ]
    },
]);


export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}