import React, { useState } from "react";
import styled from "styled-components";

import { FaLinkedinIn, FaTwitter, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";

const StyledFooter = styled.footer`
grid-area: footer;
border-top: 1px solid #eeeeee;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #0d0d0d;
height: 50vh;
width: 100vw;

@media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledLinks = styled.div`
font-size: 20px;
font-weight: 300;
margin-top: 1.5em;
text-align: center;
color: #eeeeee;
`

const StyledIcons = styled.a`
height: 3em;
width: 3em;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
`
const IconWrap = styled.div`
display: flex;
flex-direction: row;
width: 15rem;
justify-content: space-between;
`
let iconStyles = { color: "#3a3a3a", fontSize: "2em", };

const footerdata = [

    {
        id: 1,
        style: {backgroundColor: '#ffffff'},
        href: "https://www.instagram.com/",
        icon: <FaInstagram style={iconStyles} />,
        
    },

    {
        id:2,
        style: {backgroundColor: '#ffffff'},
        href: "https://se.linkedin.com/",
        icon: <FaLinkedinIn style={iconStyles} />,
    },

    {
        id:3,
        style: {backgroundColor: '#ffffff'},
        href: "https://github.com/omarabubeker",
        icon: <FaGithub style={iconStyles} />,
    },
]



const Footer = () => {

    
    return (
        <StyledFooter id="footer">
            <IconWrap>

                {footerdata.map(link => <StyledIcons  key={link.id} style={link.style} href={link.href}>{link.icon}</StyledIcons>)}

            </IconWrap>
            <StyledLinks>
                <p>O.abubeker@gmail.com</p>
            </StyledLinks>
           
        </StyledFooter>
    );
}

export default Footer;