import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { SecondButton } from "./Main";
import CV from '../assets/CV.pdf'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 400;
  }
`;

const StyledBurger = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 1px solid #414141;
  backdrop-filter: blur(5px);
  background-color: #0d0d0d5f;
  padding-bottom: 85px;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const StyledUl = styled.ul`
  position: fixed;
  top: -20px;
  background-color: #232323;
  border-bottom: 1px solid #949494;
  width: 100vw;
  height: 300px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3em;
  transform: translateY(${props => (props.isOpen ? '0%' : '-100%')});
  transition: transform 0.3s ease-in-out;

  li {
    margin-top: 2.5em;
    padding-right: 2.8em;
  }
`;

const BrgrBtn = styled.button`
  z-index: 1000;
  position: fixed;
  align-self: flex-end;
  margin: 1em;
  border: none;
  background: rgba(0, 0, 0, 0.0);
  svg {
    font-size: 1.8rem;
    color: #eeeeee;
  }
`;

const StyledLink = styled.a`
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #eeeeee;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <GlobalStyle />
      <StyledBurger>
        <BrgrBtn onClick={handleClick}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </BrgrBtn>
        <StyledUl isOpen={isOpen}>
          <li>
            <StyledLink href="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="#about">About</StyledLink>
          </li>
          <li>
            <StyledLink href="#footer">Contact</StyledLink>
          </li>
            {/* {links.map((link) => (
              <li key={link.id}>
                <StyledLink href={link.to}>{link.text}</StyledLink>
              </li>
            ))} */}
          </StyledUl>
      </StyledBurger>
    </>
  );
}

const StyledNav = styled.ul`
   background: rgba(0,0,0,0);
  list-style-type: none;
  display: flex;
  align-items: center;

  li{
    border-left: 1px solid #eeeeee;
    padding: 0 1.2em;
  }

`;

const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  background: #0d0d0d5f;
  padding: 0 2em;
  grid-area: top;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  backdrop-filter: blur(5px);
  border-bottom: 1px solid #414141;


  @media screen and (max-width: 600px) {
    display: none;}

    h1{
      color: #eeeeee;
      font-size: 20px;
      align-self: center;
    }

`;

const Styledh1 = styled.h1`
font-weight: 400;
`


export const BigNav = () => {
  return (
    <NavWrap>
      <Styledh1>Omar Abubeker</Styledh1>
      <StyledNav>
        <li>
          <StyledLink href="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink href="#about">About</StyledLink>
        </li>
        <li>
          <StyledLink href="#footer">Contact</StyledLink>
        </li>
        <a href={CV}
        download ='Omar-Abubeker-CV'
        >
        <SecondButton>Download CV</SecondButton>
        </a>
      </StyledNav>
    </NavWrap>
  );
};


export default Navbar;
