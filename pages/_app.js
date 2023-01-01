import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

import { store } from "../store/store";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = React.useState(null);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
