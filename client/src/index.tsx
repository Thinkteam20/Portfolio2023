import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import TimeLine from "./pages/TimeLine";
import Contact from "./pages/Contact";

// {
//   path: "/products/:id",
//   element: <TimeLine />,
// },

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, path: "/", element: <Home /> },

            { path: "/aboutme", element: <AboutMe /> },
            {
                path: "/Skill",
                element: <Skill />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/project",
                element: <Project />,
            },
            {
                path: "/timeline",
                element: <TimeLine />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
