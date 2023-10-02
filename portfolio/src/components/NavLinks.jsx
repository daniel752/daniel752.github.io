import links from "../Utils/links";
import NavLink from "./NavLink";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const NavLinks = () => {
  const [isNavFolded, setIsNavFolded] = useState(true);

  const openNavMenu = () => {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.replace("folded-nav-links", "open-nav-menu");
    setIsNavFolded(false);
  };

  const closeNavMenu = () => {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.replace("open-nav-menu", "folded-nav-links");
    setIsNavFolded(true);
  };

  return (
    <div className="nav-container">
      {isNavFolded && (
        <span className="nav-menu" onClick={openNavMenu}>
          <AiOutlineMenu />
        </span>
      )}
      <div
        id="nav-links"
        className={isNavFolded ? "folded-nav-links" : "nav-links"}
      >
        {links.map((link) => {
          return (
            <NavLink
              id={link.text}
              to={link.path}
              key={link.text}
              icon={link.icon}
              text={link.text}
              callback={closeNavMenu}
            ></NavLink>
          );
        })}
      </div>
    </div>
  );
};
export default NavLinks;
