import { useState } from "react";
import Navigate from "./Navigate";
import Hamburger from "../assets/hamburger.png";
import Close from "../assets/close.png";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <nav>
      <nav className="burger">
        <img src={require("../assets/logo/Asset 16@4x.png")} width="20" height="20" alt="Little Lemon logo" className="nav-image"></img>
        <button className="burger-icon" onClick={handleToggle}>
          <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
        </button>
      </nav>
      <Navigate device="desktop" />{navbarOpen ? <Navigate device="mobile" /> : ""}
    </nav>
  );
}
