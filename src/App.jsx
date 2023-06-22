import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import styled from 'styled-components'
import Navbar from './components/Navbar';
import Main from './components/Main';
import { BigNav } from './components/Navbar';
import Footer from './components/Footer';
import Spotify from './Spotify';
import Livlinan from './Livlinan';


const Container = styled.div`
min-height: 100vh;
width: 100vw;
background-color: #0d0d0d;
display: grid;
grid-template-rows: 5rem repeat(3, 1fr) 10rem;
grid-template-columns: repeat(5, 1fr);
grid-template-areas:
"top top top top top"
"main main main main main"
"main main main main main"
"main main main main main"
"footer footer footer footer footer";
min-height: 100vh;
`;





function App() {

  return (
    <Router>
       <Container>
        <Navbar/>
        <BigNav/>
          <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/Spotify" component={Spotify} />
          <Route path="/Livlinan" component={Livlinan} />
          </Switch>
        <Footer/>
      </Container>
    </Router>
  );
}

export default App
