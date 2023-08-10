import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="bg-gray-700 p-4 relative md:h-40">
        <div className="flex items-center justify-between">
          <img
            src="/rpg.png"
            alt=""
            className="w-40 h-14 transform scale-x-[-1]"
          />
          <h1 className="lg:mr-20 md:block text-3xl">Detonando Rpg</h1>
          <button
            className="text-white text-xl focus:outline-none md:hidden"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
        </div>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } mt-2 md:flex md:mt-0 md:space-x-6`}
        >
          <nav className=" md:p-4 w-full md:absolute md:bottom-0 md:left-0 rounded  bg-gray-600">
            <ul className="flex flex-col md:flex-row md:justify-evenly p-4">
              <li className="mb-2 md:mb-0">
                <a
                  href="/"
                  className="text-white hover:underline md:hover:underline"
                >
                  Home
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a
                  href="#"
                  className="text-white hover:underline md:hover:underline"
                >
                  Clássicos
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a
                  href="#"
                  className="text-white hover:underline md:hover:underline"
                >
                  Nacionais
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a
                  href="#"
                  className="text-white hover:underline md:hover:underline"
                >
                  Old but gold
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a
                  href="#"
                  className="text-white hover:underline md:hover:underline"
                >
                  Curiosidades
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
