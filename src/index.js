import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from "./pages/home/Home";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from "./components/main/Main.js"
import Accomodation from "./pages/accomodation/Accomodation"
import About from "./pages/about/About"
import Notfound from "./pages/notfound/NotFound"

const HeaderFooterLayout = () => {
  return <>
    <Header/>
    <Main>
      <Outlet/>
    </Main>
    <Footer/>
  </>
}


export const router = createBrowserRouter([

  {
    element: <HeaderFooterLayout/>,
    errorElement: <Notfound/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },

      {
        path: "/kasa/:id",
        element: <Accomodation/>
      },

      {
        path: "/about",
        element: <About/>
           
      },
    ]
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
