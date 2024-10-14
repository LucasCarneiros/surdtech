import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";

//paginas
import Home from "./routes/Home.jsx"
import Prova from "./routes/Prova.jsx"

//Objeto de configuração de roteamneto

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "Prova",
        element: <Prova />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router} />
  </StrictMode>,
)
