import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <img src="/rpg.png" alt="" />
        <div className="hgroup">
          <h1>Detonando RPG</h1>
          <h2>Melhor site de rpg</h2>
        </div>
        <nav>
          <ul>
            <li>
              <a className="current" href="/index.html">
                Home
              </a>
            </li>
            <li>
              <a href="#">Clássicos</a>
            </li>
            <li>
              <a href="#">Nacionais</a>
            </li>
            <li>
              <a href="#">Old but gold</a>
            </li>
            <li>
              <a href="#">Curiosidades</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
