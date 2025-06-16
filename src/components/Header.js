import React from "react";
import "../Css/Header.css";
import { scrollToSection } from "../utils/ScrollUtils";
import { useNavigate } from "react-router-dom";
export default function Header({
  isVisible,
  whiteBg,
  activeSection,
  isStatatic,
  useNavigation = false,
}) {
  const navigate = useNavigate();
  const goTo = (target) => {
    if(useNavigation) {
      navigate(`/${target === "hero" ? "" : target}`);
    }
    else{
      scrollToSection(target);
    }
  };
  return (
    <nav
      className={`nav ${isVisible ? "visible" : ""} ${whiteBg ? "white-bg" : ""}
        ${isStatatic ? "static" : ""}`}
    >
      <button
        onClick={() => goTo("shop")}
        className={activeSection === "shop" ? "active-btn" : ""}
      >
        Shop
      </button>
      <button
        onClick={() => goTo("about")}
        className={activeSection === "about" ? "active-btn" : ""}
      >
        About
      </button>

      <div className="nav-logo" onClick={() => goTo("hero")}>
        <img src="/images/cat.svg" alt="logo" />
      </div>

      <button onClick={() => navigate("/thoughts")}>Thoughts</button>
      <button
        onClick={() => goTo("contact")}
        className={activeSection === "contact" ? "active-btn" : ""}
      >
        Contact
      </button>
      <div>
        <button className="lol">
          <img src="/images/bag.svg" alt="shopping" />
        </button>
      </div>
    </nav>
  );
}
