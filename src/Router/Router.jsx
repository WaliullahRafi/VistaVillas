import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import Plans from "../Pages/Plans";
import ViewProperty from "../Pages/ViewProperty";
import PrivetRoute from "./PrivetRoute";
import UpdateProfile from "../Pages/UpdateProfile";
import Review from "../Pages/Review";
import UserProfile from "../Pages/UserProfile";

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
        path: "/user-profile",
        element: (
          <PrivetRoute>
            <UserProfile />
          </PrivetRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivetRoute>
            <UpdateProfile />
          </PrivetRoute>
        ),
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
        path: "/review",
        element: <Review />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
