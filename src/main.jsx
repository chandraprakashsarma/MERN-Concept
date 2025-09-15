import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./app/store"; // RTK store
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import BasicReact from "./components/React/BasicReact.jsx";
import Javascript from "./components/Javascript/Javascript.jsx";
import ReduxRTK from "./components/ReduxToolKit/ReduxRTK.jsx";
import UIComponent from "./components/UIComponent/UIComponent.jsx";
import AuthForm from "./components/AuthForm/AuthForm.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="auth" element={<AuthForm />} />
      <Route path="basicreact" element={<BasicReact />} />
      <Route path="javascript" element={<Javascript />} />
      <Route path="reduxRTK" element={<ReduxRTK />} />
      <Route path="uicomponent" element={<UIComponent />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* ✅ पूरे app को store provide किया */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
