import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import portrait from "../assets/portrait.png";
import Omar from "../assets/omar.jpg";
import Carousel from "./Carousel/Carousel";
import Pen from "../assets/pen.png";
import Phone from "../assets/phone.png";
import Tags from "../assets/tags.png";
import Figma from "../assets/figma.png";
import JavaScript from "../assets/javascript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import Photoshop from "../assets/photoshop.png";
import ReactImg from "../assets/react.png";
import { useTypewriter } from "react-simple-typewriter";
import { FaLinkedinIn, FaInstagram, FaGithub} from "react-icons/fa";


const StyledDivOne = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0d0d0d;
  width: 100vw;
`;

const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #919191;
  min-height: 100vh;
  width: 80vw;
  opacity: 0;
  animation: fadeIn 1s forwards;
  animation-delay: 0.5s;
  padding-top: 2em;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const HalfBlock = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PresentationBlock = styled(Block)`
  background-color: #0d0d0d;
  border-top: none;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    height: 70vh;
  }
`;

const ButtonDiv = styled.div`
display: flex;
`

const AboutMeBlock = styled(Block)`
  background-color: #0d0d0d;
  flex-direction: column;
`;

const AboutMeInner = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4em 0;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const MyWorkBlock = styled(Block)`
  background-color: #0d0d0d;
  flex-direction: column;

`;


const StyledText = styled.p`
  margin: 1em;
  text-align: center;
  color: #eeeeee;
  font-weight: 400;
`;

const StyledCardText = styled(StyledText)`
margin: 0;
`

const StoryText = styled.p`
  width: 20em;
  padding-right: 8em;
  color: #eeeeee;
  font-weight: 400;
  @media screen and (max-width: 1200px) {
    padding: 0;
    text-align: center;
  }
`;

const StyledHead = styled.h2`
  padding-right: 10em;
  color: #eeeeee;

  @media screen and (max-width: 1200px) {
    padding: 0;
  }
`;

const SmallCard = styled.h3`
color: #eeeeee;
`

const PresentationText = styled(StyledText)`
  width: 17em;
  color: #eeeeee;
`;


const StyledImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 1em;
`;

const StyledSecondImg = styled.img`
  padding-left: 8em;
  width: 300px;
  height: 300px;
  @media screen and (max-width: 1200px) {
    padding: 0;
  }
`;

const StyledSmallImg = styled.img`
  height: 63px;
`;

const StyledButton = styled.button`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 1em;
  padding: 0.5em 1em;
  background-color: #fc6cff;
  border: 1px solid #fc6cff;

  :hover {
    background-color: #eeeeee;
    color: #0d0d0d;
    border: 1px solid #eeeeee;
    cursor: pointer;
  }
`;

export const SecondButton = styled(StyledButton)`
  background-color: #0d0d0d;
  color: #fc6cff;
`;

const StyledTypewriter = styled.span`
  font-size: 30px;
  color: #eeeeee;
  text-shadow: 1px 1px 10px #aaaaaa;
  width: 310px;
  height: 40px;
  display: flex;
  align-items: center;
  margin: 0 0 0.5em 2.5em;

  @media screen and (max-width: 750px) {
    margin: 2em 0 1.5em 1.5em;
    max-width: 100vw;
  }
`;


const StyledHeader = styled.h1`
  text-align: center;
  font-size: 27px;
  color: #eeeeee;
`;

const SubHeader = styled.h2`
margin: 3em 0;
font-size: 23px;
color: #eeeeee;
`;

const WID = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }

`;

const WIDCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2em 2em 2em;
  width: 180px;
  height: 300px;
  text-align: center;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 3em;

  @media screen and (max-width: 750px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);

  }
`;

const GridInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2em 2em 2em;
`;
const IconWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 15rem;
  justify-content: center;
`;
let iconStyles = { color: "#3a3a3a", fontSize: "1.5em" };

const StyledIcons = styled.a`
  height: 2.5em;
  width: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 1em;
`;

const icondata = [
  {
    id: 1,
    style: { backgroundColor: "#ffffff" },
    href: "https://www.instagram.com/",
    icon: <FaInstagram style={iconStyles} />,
  },

  {
    id: 2,
    style: { backgroundColor: "#ffffff" },
    href: "https://se.linkedin.com/",
    icon: <FaLinkedinIn style={iconStyles} />,
  },

  {
    id: 3,
    style: { backgroundColor: "#ffffff" },
    href: "https://se.linkedin.com/",
    icon: <FaGithub style={iconStyles} />,
  },
];

const Main = () => {
  const [text] = useTypewriter({
    words: ["UX/UI-Designer", "Frontend Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 60,
  });

  return (
    <StyledDivOne>
      <PresentationBlock>
        <HalfBlock>
          <StyledImg src={portrait} alt="My Portrait" />
          <PresentationText>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </PresentationText>
          <IconWrap>
            {icondata.map((link) => (
              <StyledIcons style={link.style} href={link.href}>
                {link.icon}
              </StyledIcons>
            ))}
          </IconWrap>
        </HalfBlock>
        <HalfBlock>
            <StyledTypewriter>{text}</StyledTypewriter>
          <ButtonDiv>
            <StyledButton>portfolio</StyledButton>
            <SecondButton>Contact</SecondButton>
          </ButtonDiv>
        </HalfBlock>
      </PresentationBlock>

      <AboutMeBlock id="about">
        <StyledHeader>About me</StyledHeader>
        <AboutMeInner>
          <HalfBlock>
            <StyledSecondImg src={Omar} alt="About Me Image" />
          </HalfBlock>
          <HalfBlock>
            <StyledHead>Story</StyledHead>
            <StoryText>
              After several years in the education sector, I decided to seek new
              challenges and broaden my skills. As someone who loves to learn
              new things, I felt that a career in UX/UI would allow me to
              explore the dynamic field of IT while continuing to place people
              at the heart of my work. Throughout my studies and experience as a
              freelance designer, I have developed a particular interest in
              accessibility issues and a skillset to create and enhance websites
              and applications for diverse target audiences.
            </StoryText>
          </HalfBlock>
        </AboutMeInner>

        <SubHeader>What I do</SubHeader>
        <WID>
          <WIDCard>
            <StyledSmallImg src={Pen} alt="My Image" />
            <SmallCard>UX</SmallCard>
            <StyledCardText>
              Designing interfaces that enhance user satisfaction by making them
              easy to use, engaging, and intuitive. It considers user needs and
              behaviors.
            </StyledCardText>
          </WIDCard>
          <WIDCard>
            <StyledSmallImg src={Phone} alt="My Image" />
            <SmallCard>UI</SmallCard>
            <StyledCardText>
              designing the look and feel of digital interfaces, including the
              layout, typography, and visual elements. It focuses on aesthetics
              and usability.
            </StyledCardText>
          </WIDCard>
          <WIDCard>
            <StyledSmallImg src={Tags} alt="My Image" />
            <SmallCard>Frontend</SmallCard>
            <StyledCardText>
              development using HTML, CSS, and JavaScript to create the visual
              and interactive components of a website or application that users
              interact with.
            </StyledCardText>
          </WIDCard>
        </WID>

        <SubHeader>My tools</SubHeader>
        <GridBox>
          <GridInner>
            <StyledText>HTML</StyledText>
            <StyledSmallImg src={html} alt="My Image" />
          </GridInner>
          <GridInner>
            <StyledText>CSS</StyledText>
            <StyledSmallImg src={css} alt="My Image" />
          </GridInner>
          <GridInner>
          <StyledText>JAVASCRIPT</StyledText>
            <StyledSmallImg src={JavaScript} alt="My Image" />
          </GridInner>
          <GridInner>
          <StyledText>REACT</StyledText>
            <StyledSmallImg src={ReactImg} alt="My Image" />
          </GridInner>
          <GridInner>
          <StyledText>FIGMA</StyledText>
            <StyledSmallImg src={Figma} alt="My Image" />
          </GridInner>
          <GridInner>
          <StyledText>PHOTOSHOP</StyledText>
            <StyledSmallImg src={Photoshop} alt="My Image" />
          </GridInner>
        </GridBox>
      </AboutMeBlock>

      <MyWorkBlock>
        <StyledHeader>My Work</StyledHeader>
        <PresentationText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet ad ratione voluptate asperiores corrupti nulla ut commodi magni sint.</PresentationText>
        <Carousel></Carousel>
      </MyWorkBlock>
    </StyledDivOne>
  );
};

export default Main;
