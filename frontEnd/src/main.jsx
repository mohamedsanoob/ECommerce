import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Menu from './views/pages/Menu.jsx'
import Contact from './views/pages/Contact.jsx'
import Home from './views/pages/Home.jsx'
import About from './views/pages/About.jsx'
import Login from './views/pages/Login.jsx'
import AddProduct from './views/pages/AddProduct.jsx'
import Signup from './views/pages/SignUp.jsx'
import {store} from './redux/index.js'
import {Provider} from 'react-redux'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='menu' element={<Menu />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='login' element={<Login />} />
      <Route path='add-product' element={<AddProduct />} />
      <Route path='signup' element={<Signup />} />
    </Route >
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)