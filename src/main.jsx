import React from "react";
import ReactDOM from "react-dom/client";
import { UserDataProvider } from "./Context/UserData.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import LoginSignUpPage from "./Pages/LoginSignupPage.jsx";
import InternshipCard from "./Components/Internships/IntershipCard.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserDataProvider><Root /></UserDataProvider>,
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
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
