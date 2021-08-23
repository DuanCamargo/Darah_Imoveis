import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'


import {
    Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavBtn, 
    NavBtnLink,
    NavLinks} from "./NavbarStyle"

const Navbar = ({toggle}) => {

  

   return (
      <>
      
           <Nav >
               <NavbarContainer>
                   <NavLogo to='/' >DarahLogo</NavLogo>
                   <MobileIcon onClick={toggle}>
                       <FaBars/>
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinks to="about">Cadastro de usuario</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to= "discover">Cadastro de imóvel</NavLinks>
                       </NavItem>
                       
                   </NavMenu>
                   <NavBtn>
                       <NavBtnLink to="/signin">Sing in</NavBtnLink>
                   </NavBtn>
                   
               </NavbarContainer>
           </Nav>
           
      </>
   )
}

export default Navbar