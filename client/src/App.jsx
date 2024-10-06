import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import FriendsDetail from "./components/FriendsDetail";
import Comment from "./components/Comment";
import HomePage from "./components/Hompage";
import ForgotPassword from "./components/ForgotPassword";
import CreateAccount from "./components/CreateAccount";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/configureStore";
import ProfilePage from "./components/ProfilePage";
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

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
