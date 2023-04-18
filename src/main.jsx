import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import {  createBrowserRouter, RouterProvider, HashRouter } from "react-router-dom" ;

import { Page_Elettronica, Page_Meccanica, Page_Informatica, Page_Management } from './components';


import './index.css'

const router = createBrowserRouter([
  {
    path: "/Liotrucorse-site/",
    element: <App/> ,
  },

  {
    path: "/Liotrucorse-site/#/Divisione_Elettronica",
    element: <Page_Elettronica/>,
  },

  {
    path: "/Liotrucorse-site/#/Divisione_Meccanica",
    element: <Page_Meccanica/>,
  },

  {
    path: "/Liotrucorse-site/#/Divisione_Informatica",
    element: <Page_Informatica/>,
  },

  {
    path: "/Liotrucorse-site/#/Divisione_Management",
    element: <Page_Management/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <RouterProvider router={router}></RouterProvider>
    </HashRouter>
  </React.StrictMode>
);