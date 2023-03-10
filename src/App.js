import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from "./components/main/Main.js"
import Accomodation from "./pages/accomodation/Accomodation"
import About from "./pages/about/About"
import Notfound from "./pages/notfound/NotFound"


const HeaderFooterLayout = () => {
    return <>
        <Header />
        <Main>
            <Outlet />
        </Main>
        <Footer />
    </>
}


export const router = createBrowserRouter([

    {
        element: <HeaderFooterLayout />,
        errorElement: <Notfound />,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
                path: "/kasa/:id",
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