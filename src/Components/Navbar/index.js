import React  from 'react'
import { useState } from 'react';
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
    NavLinks,
    Teste} from "./NavbarStyle"

const Navbar = ({toggle}) => {

    // const [div, setDiv] = useState(false);
    // const onClickk = () => setDiv(true);

   return (
      <>
           <Nav >
               <NavbarContainer>
                   <NavLogo to='/' >Ôh de casa</NavLogo>
                   <MobileIcon onClick={toggle}>
                       <FaBars/>
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLinks to="/homeCadastro" >Cadastro de usuario</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to= '/anuncios'> <BsFillGridFill className="iconNav"/> Anuncios </NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to= "/login"> <BsFillPersonFill className="iconNav"/> Entrar </NavLinks>
                       </NavItem>
                       <NavItem>
                           <Teste>
                               <div id="teste" className="divGosh">
                                   <p>entrou</p> </div>
                           </Teste>
                       </NavItem>
                     
                      


                      
                       
                       
                   </NavMenu>
                   <NavBtn>
                       <NavBtnLink to="/imovel">Cadastro de Imóvel</NavBtnLink>
                   </NavBtn>
                   
               </NavbarContainer>
           </Nav>
           
      </>
   )
}


export default Navbar