import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import './index.css'
import Counter from "./pages/Counter";
import Products from "./pages/Products";
import RickMorty from "./pages/RickMorty";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Counter /> */}
    {/* <Products /> */}
    <RickMorty />
  </StrictMode>
);
