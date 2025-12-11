import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import Counter from "./pages/Counter";
import Products from "./pages/Products";
import RickMorty from "./pages/RickMorty";
import Router from "./Router";
import { Provider as ReduxProvider } from "react-redux";
import reduxStore, { persistedStore } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxProvider store={reduxStore}>
      <PersistGate persistor={persistedStore}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  </StrictMode>
);
