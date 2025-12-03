import React from "react";
import { Routes, Route } from "react-router";
import RickMorty from "./pages/RickMorty";
import App from "./pages/Counter";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";

function Router() {
  /// => app
  // Todolist => Todoist
  return (
    <Routes>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/RickMorty" element={<RickMorty />}></Route>
      <Route path="/Products" element={<Products />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default Router;
