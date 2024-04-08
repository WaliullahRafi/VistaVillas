import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import OurService from "../Pages/OurService";
import AboutUs from "../Pages/AboutUs";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import Plans from "../Pages/Plans";
import ViewProperty from "../Pages/ViewProperty";
import PrivetRoute from "./PrivetRoute";
import UpdateProfile from "../Pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login-page",
        element: <LoginPage />,
      },
      {
        path: "/register-page",
        element: <RegisterPage />,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "/plans",
        element: <Plans />,
      },
      {
        path: "/plans/view-property/:id",
        element: (
          <PrivetRoute>
            <ViewProperty />
          </PrivetRoute>
        ),
      },
      {
        path: "/our-service",
        element: <OurService />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
