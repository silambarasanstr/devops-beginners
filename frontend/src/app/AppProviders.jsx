import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import { ThemeProvider } from "../context/ThemeContext";

const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

export default AppProviders;
