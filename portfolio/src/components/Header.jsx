import React from "react";
import NavLinks from "./NavLinks";
import Title from "./Title";

const Header = () => {
  return (
    <header className="header">
      <Title />
      <NavLinks />
    </header>
  );
};
export default Header;
