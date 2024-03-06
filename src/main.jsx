import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Root from './routes/root.jsx'
import ErrorPage from './error-page.jsx'
import LandingPage from './Pages/LandingPage.jsx'
import LoginSignUpPage from './Pages/LoginSignupPage.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[{
      path: "",
      element: <LandingPage/>,
      errorElement:<ErrorPage/>
    },
    {
      path:"/login",
      element:<LoginSignUpPage page="login"/>,
      errorElement:<ErrorPage/>
    },
    {
      path:"/signup",
      element:<LoginSignUpPage page=""/>,
      errorElement:<ErrorPage/>
    },
    {
      path:"/testing",
      element:<div>Testing</div>,
      errorElement:<ErrorPage/>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
