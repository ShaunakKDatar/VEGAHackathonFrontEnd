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
import { UserDataProvider } from './Contexts/UserData.jsx'

import Form from './Components/Companies/Form/Form.jsx'
import StudentInt from './Components/IntQ/StudentInt.jsx'
import QueryForum from './Components/QueryForum/QueryForum.jsx'
import EventItem from './Components/TPOcomponents/EventItem.jsx'
import Events from './Components/TPOcomponents/Events.jsx'
import InternshipTPO from './Components/TPOcomponents/InternshipTPO.jsx'

import Component from './Components/Profile/Profile.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserDataProvider>
        <Root />
      </UserDataProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <LandingPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/login",
        element: <LoginSignUpPage page="login" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/signup",
        element: <LoginSignUpPage page="" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/testing",
        element: <div>hello</div>,
        errorElement: <ErrorPage />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
