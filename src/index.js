import React from "react";
import { render } from "react-dom";
//import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
//import { UserProvider } from "./context/user.context";
import { CategoriesProvider } from "./context/categories.contex";
import { CartProvider } from "../src/context/cart.contex";
import App from "./App";
import { store } from "./store/store";
import "./index.scss";

/* const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
       
          <CartProvider>
            <App />
          </CartProvider>
        
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
); */

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
        
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
