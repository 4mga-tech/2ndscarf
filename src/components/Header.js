import React from "react";
import "../Css/Header.css";
import { scrollToSection } from "../utils/ScrollUtils";

export default function Header({ isVisible, whiteBg , activeSection}) {
  return (
    <nav className={`nav ${isVisible ? "visible" : ""} ${whiteBg ? "white-bg" : ""}`}>
      <button onClick={() => scrollToSection("shop")}
        className={activeSection === "shop" ? "active-btn" : ""}>Shop</button>
      <button onClick={() => scrollToSection("about")}
        className={activeSection === "about" ? "active-btn" : ""}>About</button>

      <div className="nav-logo" onClick={() => scrollToSection("hero")}>
        <img src="/images/cat.svg" alt="logo" />
      </div>

      <button>Thoughts</button>
      <button onClick={() => scrollToSection("contact")}
        className={activeSection === "contact" ? "active-btn" : ""}>Contact</button>
      <div>
        <button className="lol">
          <img src="/images/bag.svg" alt="shopping" />
        </button>
      </div>
    </nav>
  );
}

