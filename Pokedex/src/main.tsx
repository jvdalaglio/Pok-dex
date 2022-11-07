import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { Details } from './pages/Details'
import { Home } from './pages/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <section className='container'>
    <Home />
    </section>
  </React.StrictMode>
);