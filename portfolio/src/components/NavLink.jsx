import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ id, to, icon, text, isNewWindow, callback }) => {
  const { hash } = useLocation(); // Get the current pathname from the location
  const isActive = hash === to;

  return (
    <div className="nav-container">
      <a
        href={to}
        className="nav-link"
        onClick={callback ? callback : null}
        target={isNewWindow ? "_blank" : null}
      >
        <span className="icon">{icon}</span>
        {text}
      </a>
      <div
        id={`nav-${id}`}
        className={isActive ? "active-nav-link" : null}
      ></div>
    </div>
  );
};

export default NavLink;
