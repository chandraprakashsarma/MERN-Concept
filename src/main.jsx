import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import BasicReact from "./components/React/BasicReact.jsx";
import Javascript from "./components/Javascript/Javascript.jsx";
import ReduxRTK from "./components/ReduxToolKit/ReduxRTK.jsx";
import UIComponent from "./components/UIComponent/UIComponent.jsx";
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])UIComponent

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="basicreact" element={<BasicReact />} />
      <Route path="javascript" element={<Javascript />} />
      <Route path="reduxRTK" element={<ReduxRTK />} />
      <Route path="uicomponent" element={<UIComponent />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

{
  /*


import React, {useState} from 'react'

export default function TemplateLiterals() {
    return (

        <>
         <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
            Hooks Basic Concept
        </h1>

        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Template Literals
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
                
        </div></div>

        </>
        
    )
}

*/
}
