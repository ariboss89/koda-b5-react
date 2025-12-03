import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route } from "react-router";
//import './index.css'
import Counter from "./pages/Counter";
import Products from "./pages/Products";
import RickMorty from "./pages/RickMorty";
import Router from "./Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
);
