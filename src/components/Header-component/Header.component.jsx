import React from "react";
import "./Header-styles.css";

function Header() {
  return (
    <header className="header-container">
      <h1 className="title">kuchaříme</h1>
      <nav>
        <ul>
          <li>
            <a href="#uvod-menu-link">ůvod</a>
          </li>
          <li>
            <a href="#recepty-menu-link">recepty</a>
          </li>
          <li>
            <a href="#form-menu-link">formular</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
