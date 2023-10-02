import React from "react";
import NavLinks from "./NavLinks";
import Title from "./Title";
import Wrapper from "../wrappers/Header";

const Header = () => {
  return (
    <Wrapper>
      <header className="header">
        <img
          className="logo"
          src="/assets/images/header-logo.png"
          alt="image of logo"
        />
        <NavLinks />
      </header>
    </Wrapper>
  );
};
export default Header;
