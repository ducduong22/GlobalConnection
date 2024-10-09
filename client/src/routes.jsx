import Login from "./components/Login";
import FriendsDetail from "./components/FriendsDetail";
import Comment from "./components/Comment";
import HomePage from "./components/Hompage";
import ForgotPassword from "./components/ForgotPassword";
import CreateAccount from "./components/CreateAccount";
import ProfilePage from "./components/ProfilePage";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <div id="posts-container">
        <Login />
      </div>
    ),
  },
  {
    path: "/login/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/login/create-account",
    element: <CreateAccount />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
  {
    path: "/profile-page/:name/:userId",
    element: <ProfilePage />,
  },
  {
    path: "/user/:userId",
    element: <FriendsDetail />,
  },
  {
    path: "/post/:id/comments",
    element: <Comment />,
  },
  {
    path: "/*",
    element: <Navigate to="/login" />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
