import React from "react";
import NavLinks from "./NavLinks";
import Title from "./Title";
import Wrapper from "../wrappers/Header";

const Header = () => {
  const screenWidth = window.screen.width;
  const minWidth = 992;
  const isSmallScreen = screenWidth <= minWidth;

  return (
    <Wrapper>
      <header className="header">
        <img
          className="logo"
          src="/assets/images/header-logo.png"
          alt="image of logo"
        />
        <NavLinks isHiddenNav={isSmallScreen} />
      </header>
    </Wrapper>
  );
};
export default Header;
