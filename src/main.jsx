import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './input.css'
import 'font-awesome/css/font-awesome.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Reg from './component/userAuth/Registration'
import Navbar from './component/Navbar/Navbar'
import Shop from './component/Shop/Shop'
import Login from './component/userAuth/Login'



const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
  },
  {
    path: "/sign-up",
    element: <div>
      <Navbar/>
      <Reg />
      </div>,
  },
  {
    path: "/Shop",
    element: <div>
      <Navbar/>
      <Shop />
      </div>,
  },
  {
    path: "/login",
    element: <div>
      <Navbar/>
      <Login />
      </div>,
  },
  // {
  //   path: "/sign-up",
  //   element: <div>
  //     <Navbar/>
  //     <Reg />
  //     </div>,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
