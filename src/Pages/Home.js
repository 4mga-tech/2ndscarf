import React, { useState, useEffect, useRef } from "react";
import "../Css/Home.css";
import Header from "../components/Header";
import { Button } from "antd";
import Shop from "../components/Shop";
import About from "../components/About";
import Contact from "../components/Contact";
import { scrollToSection } from "../utils/ScrollUtils";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);
  const [headerBgWhite, setheaderBgWhite] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const shop1 = document.getElementById("shop");
      const shop2 = document.getElementById("wrap-spring");
      const about = document.getElementById("about");
      const contact = document.getElementById("contact");

      const heroRect = hero?.getBoundingClientRect();
      const shop1Rect = shop1?.getBoundingClientRect();
      const shop2Rect = shop2?.getBoundingClientRect();
      const scrollY = window.scrollY + window.innerHeight / 2;
       const getSectionTop = (el) => el?.getBoundingClientRect().top + window.scrollY;

    if (contact && scrollY >= getSectionTop(contact)) {
      setActiveSection("contact");
    } else if (about && scrollY >= getSectionTop(about)) {
      setActiveSection("about");
    } else if (shop1 && scrollY >= getSectionTop(shop1)) {
      setActiveSection("shop");
    } else {
      setActiveSection("hero");
    }
      if (heroRect && heroRect.bottom > window.innerHeight / 2) {
        setShowHeader(true);
        setheaderBgWhite(false);
      } else if (
        shop1Rect &&
        shop1Rect.top < window.innerHeight / 2 &&
        shop2Rect &&
        shop2Rect.top > window.innerHeight / 2
      ) {
        setShowHeader(false);
      } else if (shop2Rect && shop2Rect.top < window.innerHeight / 1.5) {
        setShowHeader(true);
        setheaderBgWhite(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main">
      <Header isVisible={showHeader} whiteBg={headerBgWhite} activeSection={activeSection} />
      <section id="hero" className="hero-section">
        <h1 className="underline">HAND KNIT. HIGH FASHION</h1>
        <button className="shopBtn" onClick={() => scrollToSection("shop")}>Shop Now</button>
      </section>

      <Shop />
      <section className="divide">
        <img src="/images/dividerImg.webp" alt="dividerImg" />
      </section>
      <About />
      <section className="divide">
        <img src="/images/footerImg.jpg" alt="footerimg" />
      </section>
      <Contact />
    </div>
  );
}
