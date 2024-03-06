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
import InternshipCard from './Components/Internships/IntershipCard.jsx'
import Form from './Components/Companies/Form/Form.jsx'
import StudentInt from './Components/IntQ/StudentInt.jsx'
import QueryForum from './Components/QueryForum/QueryForum.jsx'
import EventItem from './Components/TPOcomponents/EventItem.jsx'
import Events from './Components/TPOcomponents/Events.jsx'
import InternshipTPO from './Components/TPOcomponents/InternshipTPO.jsx'
import { UserDataProvider } from './Context/UserData.jsx'

import Component from './Components/Profile/Profile.jsx'
import Companies from './Components/Companies/Companies.jsx'
import Login from './Components/Login.jsx'
import RegisterTPO from './Components/RegisterTPO.jsx'
import RegisterStudent from './Components/RegisterStudent.jsx'
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
        element: <InternshipCard />,
        errorElement: <ErrorPage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
