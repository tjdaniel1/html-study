import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./pages/Counter.jsx";
import Signup from "./pages/Signup.jsx";
import NavBar from "./components/NavBar.jsx";
import Layout from "./pages/Layout.jsx";
import Login from "./pages/Login.jsx";
import Boards from "./pages/Boards.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Counter /> },
      { path: "/join", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/board", element: <Boards /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
