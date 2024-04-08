import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './pages/home.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ChangePreventersPage from './pages/cpreventers.jsx'
import DispensablesPage from './pages/dispensables.jsx'
import ErrorPage from './pages/404.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/ChangePreventers",
    element: <ChangePreventersPage/>
  },
  {
    path: "/Dispensables",
    element: <DispensablesPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
