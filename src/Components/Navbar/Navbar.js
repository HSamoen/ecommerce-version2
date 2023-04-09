import {NavLink} from 'react-router-dom'
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBCollapse,
} from 'mdb-react-ui-kit';


export default function App() {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='white'>
        <NavLink  to="/" exact>
          <img style={{width:"40%", paddingLeft:10}} src="https://i.imgur.com/Fbz6Vsg.png" alt="flower-logo" />
        </NavLink>
      <MDBContainer fluid>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem style={{padding:15, fontSize:18}} > 
            <i style={{paddingRight:10}} className="far fa-clone"></i> 
             <NavLink to="/">Home</NavLink>
           
            </MDBNavbarItem>
            <MDBNavbarItem style={{padding:15, fontSize:18}}> 
            <i style={{paddingRight:10}} className="fas fa-shopping-bag"></i>
             <NavLink to="/products">Products</NavLink>
            </MDBNavbarItem>

            <MDBNavbarItem style={{padding:15, fontSize:18}}> 
            <i style={{paddingRight:10}} className="far fa-address-book"></i>
             <NavLink to="/contact">Contact</NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}