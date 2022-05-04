import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>TodoList</HeaderTitle>
      {/* <LinkSections>
        <NavItem to="/">Sign in</NavItem>
        <NavItem to="/">Sign Up</NavItem>
      </LinkSections> */}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 99;
  position: sticky;
  top: 0;
  left: 0;
  background: #1f2125;

  height: 50px;
  /* box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.4); */

  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  color: white;
`;

const LinkSections = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: absolute;
  right: 10px;

  align-items: space-between;
`;

const NavItem = styled(NavLink)`
  position: relative;
  display: flex;
  text-decoration: none;

  font-size: 1.5rem;
  font-weight: 200;
  background: blue;
  color: white;
  padding: 7px 14px;
  width: 90px;
  align-items: center;
  border-radius: 34px;

  /* &.active {
    color: red;
    /* font-size: 44px; */

  /* border-radius: 34px; */
  /* }  */
`;
