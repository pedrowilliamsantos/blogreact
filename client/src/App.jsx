import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Write from './pages/Write';
import Home from './pages/Home';
import Single from './pages/Single';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './style.scss'

const Layout = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
}

const App = () => {

    const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/post/:id",
                element:<Single></Single>
            },
            {
                path:"/write",
                element:<Write></Write>
            }
        ]
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/login",
        element: <Login/>,
    }
    ]);

  return (
    <>
    <div className='app'>
        <div className='container'>
            <RouterProvider router={router}/>
        </div>
    </div>
    </>
  );
}

export default App;