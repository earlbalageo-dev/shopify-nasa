import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo>
        <i className='fas fa-user-astronaut'></i> Daily Cosmos
      </Logo>
    </Nav>
  );
};

const Logo = styled.h1`
  color: #fff;
  font-weight: normal;
  font-size: 1.4rem;
`;
const Nav = styled.header`
  background-color: #030035;
  padding: 0.7rem 1rem;
`;

export default Header;
