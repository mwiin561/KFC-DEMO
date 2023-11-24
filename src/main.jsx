import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'

const routes=createBrowserRouter([
  //main page
  {
    path:'/',
    element:<Home/>
  },
  //product detail page 
  {
    path:'/product/:id',
    element:<Product/>
  },
  {
    path:'/cart',
    element:<App/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
