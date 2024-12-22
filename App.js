import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/Pages/Body";
import About from "./src/Pages/About";
import Service from "./src/Pages/Service";
import Contact from "./src/Pages/Contact";
import Error from "./src/Pages/Error";
import Restaurant from "./src/Pages/Restaurant";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/service", element: <Service /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <Restaurant /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);