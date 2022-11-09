import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { Details } from './pages/Details'
import { Home } from './pages/Home'
import {RouterProvider} from "react-router-dom"
import {router} from "./router/router"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <section className='container'>
    <RouterProvider router={router}/>
    </section>
  </React.StrictMode>
);