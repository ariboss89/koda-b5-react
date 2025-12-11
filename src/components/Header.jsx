import React from "react";
import { Link, useLocation } from "react-router";

function Header() {
  const location = useLocation();
  return (
    <>
      <header className="flex justify-between p-5 select-none bg-sky-500 text-white font-bold">
        <h1 className="text-2xl min-w-50">Ari Ramadhan</h1>
        <nav className="flex flex-row justify-center items-center">
          <ul className="flex gap-5">
            <li className="hover:text-gray-600">
              <Link
                to={"/"}
                className={location.pathname === "/" ? "text-gray-600" : ""}
              >
                Home
              </Link>
            </li>
            <li className="hover:text-gray-600">
              <Link
                to={"/rickmorty"}
                className={
                  location.pathname === "/rickmorty" ||
                  location.pathname === "/rickmorty/:id/:slug"
                    ? "text-gray-600"
                    : ""
                }
              >
                Rick & Morty
              </Link>
            </li>
            <li className="hover:text-gray-600">
              <Link
                to={"/products"}
                className={
                  location.pathname === "/products" ? "text-gray-600" : ""
                }
              >
                Products
              </Link>
            </li>
            <li className="hover:text-gray-600">
              <Link
                to={"/survey"}
                className={
                  location.pathname === "/survey" ? "text-gray-600" : ""
                }
              >
                Surveys
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
