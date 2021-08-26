import React  from 'react'
import {FaBars} from 'react-icons/fa'
import { BsFillPersonFill } from "react-icons/bs";
import {BsFillGridFill}  from "react-icons/bs";
import '../../../src/App.css'




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
                           <NavLinks to="/homeCadastro" >Cadastro de usuario</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to= "./testeHome"> <BsFillGridFill className="iconNav"/> Anuncie </NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to= "discover"> <BsFillPersonFill className="iconNav"/>Entrar</NavLinks>
                       </NavItem>
                       
                       
                   </NavMenu>
                   <NavBtn>
                       <NavBtnLink to="/singin">Anunciar</NavBtnLink>
                   </NavBtn>
                   
               </NavbarContainer>
           </Nav>
           
      </>
   )
}


export default Navbar