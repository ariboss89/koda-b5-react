import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <>
      <header className="flex justify-between p-5 select-none bg-sky-500 text-white font-bold">
        <h1 className="text-2xl min-w-50">Ari Ramadhan</h1>
        <nav className="flex flex-row justify-center items-center">
          <ul className="flex gap-5">
            <li className="hover:text-gray-600">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link to={"/RickMorty"}>Rick & Morty</Link>
            </li>
            <li className="hover:text-gray-600">
              <Link to={"/Products"}>Products</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
