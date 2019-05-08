import React from 'react';
import logo from './assets/img/logo.png';
import bigPicture from './assets/img/big-pic.png';
import smallPicture from './assets/img/small-pic.png';

import './App.css';
import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
from 'mdbreact';
import HamburgerNav from './components/Header/HeaderNav/Nav.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <HamburgerNav></HamburgerNav>
    <MDBContainer>

      <header className="App-header">

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          #TechDesign
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          #HealthCare Revolution
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          #Future
        </a>

         <Link to="/page"><img src={bigPicture} className="App-logo" alt="logo" />
        </Link>
                <Route path="/page" component={Page} />

        <h6>US</h6>
        <h5>Poverty To Empowerment In Chicago</h5>

        <hr />
        <h6>US</h6>
        <p>Divided American Lives During War</p>

       
      </header>
       </MDBContainer>
    </div>
    </Router>
  );
}

function Page() {
  return <h2>Page</h2>;
}

export default App;
