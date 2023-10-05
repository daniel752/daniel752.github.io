import links from "../Utils/links";
import NavLink from "./NavLink";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const NavLinks = ({ isHiddenNav }) => {
  const [isNavClosed, setIsNavClosed] = useState(true);

  const openNavMenu = () => {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.add("open-nav-menu");
    navLinks.style.overflow = "hidden";
    setIsNavClosed(false);
    document.body.style.overflow = "hidden";
  };

  const closeNavMenu = () => {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.remove("open-nav-menu");
    navLinks.style.overflow = "";
    setIsNavClosed(true);
    document.body.style.overflow = "";
  };

  return (
    <div className="navs-container">
      {isHiddenNav && isNavClosed && (
        <span className="nav-menu" onClick={openNavMenu}>
          <AiOutlineMenu />
        </span>
      )}
      {isHiddenNav ? (
        <div
          id="nav-links"
          className={
            isHiddenNav && isNavClosed ? "folded-nav-links" : "open-nav-menu"
          }
        >
          {links.map((link) => {
            return (
              <NavLink
                id={link.text}
                to={link.path}
                key={link.text}
                icon={link.icon}
                text={link.text}
                isNewWindow={link.isNewWindow}
                callback={closeNavMenu}
              ></NavLink>
            );
          })}
        </div>
      ) : (
        <div className="nav-links">
          {links.map((link) => {
            return (
              <NavLink
                id={link.text}
                to={link.path}
                key={link.text}
                icon={link.icon}
                text={link.text}
                isNewWindow={link.isNewWindow}
              ></NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default NavLinks;
