import React, { Component } from 'react';
import { MDBIcon, MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer }
from 'mdbreact';
import logo from '../../../assets/img/logo.png';
import './Nav.scss';

class HamburgerNav extends Component {
state = {
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

render() {
  return (
    <MDBContainer>
      <MDBNavbar color="lighten-4" style={{ boxShadow: 'none', padding: '0'}} light>
        <MDBContainer style={{ paddingLeft: '0'}}>
        <MDBNavbarBrand > 
        <MDBNavbarToggler  style={{paddingLeft: '0'}}/>
          
          
           <img src={logo} alt="logo" style={{ height: '30px'}}/>
          </MDBNavbarBrand>
          <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar >
            <NavbarNav left>
             <MDBNavItem active>
                Home
                </MDBNavItem>
              <MDBNavItem>
               Link</MDBNavItem>
              <MDBNavItem>
               Profile</MDBNavItem>
            </NavbarNav>
          </MDBCollapse>
          <MDBIcon icon="search" className="text-right"/>
        </MDBContainer>
      </MDBNavbar>
    </MDBContainer>
    );
  }
}

export default HamburgerNav;