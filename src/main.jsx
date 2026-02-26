import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import Favorites from "./pages/Favorites.jsx";
import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "category/:name", element: <Category /> },
        { path: "book/:id", element: <BookDetails /> },
        { path: "favorites", element: <Favorites /> },
      ],
    },
  ],
  {
  
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
