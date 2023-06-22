import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Container = styled.div`
  height: 10rem;
  background-color: #eeeeee;
  margin: 0 0.5rem;
  border-radius: 5px;
  border: 1px solid #323232;
`;
const ImgContainer = styled.div`
  margin-right: 1em;
  height: 100%;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const StyledImg = styled.img`
border-radius: 5px;
border: 1px solid #323232;
`

const StyledP = styled.p`
  color: #eeeeee;
`;

const Projects = (props) => {
  const { img, url, text } = props.item;
  return (
    <>
        <Container>
          <ImgContainer>
           <Switch>
            <Link to={url}>
              <StyledImg src={img} alt="" />
            </Link>
           </Switch>
          </ImgContainer>
        </Container>
        <StyledP>{text}</StyledP>
    </>
  );
};

export default Projects;
