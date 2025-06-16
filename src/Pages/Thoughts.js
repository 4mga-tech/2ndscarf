import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import "../Css/Header.css";
import "../Css/Thoughts.css";
export default function Thoughts() {
  return (
    <div className="Thoughts">
      <Header
        isVisible={true}
        whiteBg={true}
        isStatatic={true}
        useNavigation={true}
        activeSection={true}
      />
      <Contact />
    </div>
  );
}
