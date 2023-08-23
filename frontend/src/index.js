import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouteProvider,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomePage />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/cart' element={<CartPage />} />

    </Route>
  )
);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
