import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './components/shop/shop';
import Home from './components/Layout/Home';
import { Children } from 'react';
import Orders from './components/Orders/Orders';
import Inventory from './components/inventory/inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/catdProductsLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
        {
          path: '/',
          element: <Shop />
        },
        {
          path: 'orders',
          element: <Orders />,
          loader: cartProductsLoader
        },
        {
          path: 'inventory',
          element: <Inventory />
        },
        {
          path: 'login',
          element: <Login />
        }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
