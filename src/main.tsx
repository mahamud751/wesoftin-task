import React from "react";
import { render } from "react-dom";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { router } from "./Routes/Routes";
import store from "./redux/store.js";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <div className="mx-auto">
          <RouterProvider router={router} />
        </div>
      </Provider>
    </React.StrictMode>,
    rootElement
  );
} else {
  console.error("Element with ID 'root' not found in the DOM.");
}
