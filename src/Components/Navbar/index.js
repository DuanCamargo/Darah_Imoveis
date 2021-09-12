import React from 'react'
import { UsuarioLogadoContext } from "../../Context/UsuarioLogado";
import { useState, useContext, useEffect } from 'react';
// Icons
import { FaBars } from 'react-icons/fa'
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";
import { FiUser } from 'react-icons/fi'
import { BiLogOut } from 'react-icons/bi'
import {AiOutlineSetting} from 'react-icons/ai'
// Css Icons
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
} from "./NavbarStyle"

const Navbar = ({ toggle }) => {

    const [teste, setTeste] = useContext(UsuarioLogadoContext)
    const [logado, setLogado] = useState(false)

    // useEffect(()=>{
    //     if(teste.id !== ""){
    //         setLogado(true)
    //     }else{
    //         setLogado(false)
    //     }
    // })


    return (
        <>
            <Nav >
                <NavbarContainer>
                    <NavLogo to='/' >Ôh de casa</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/homeCadastro" >Cadastro de usuario</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/anuncios'> <BsFillGridFill className="iconNav" /> Anuncios </NavLinks>
                        </NavItem>


                        {logado ?
                            <div class="dropdown">
                                  <NavLinks to= "/login"> <FiUser className="iconNav"/> Andrei Moreira</NavLinks>
                            <div class="dropdown-content">
                              <a href="/"> <AiOutlineSetting  className="iconNav" />Minha conta</a>
                              <a href="/"> <BiLogOut className="iconNav" />Logout</a>
                            </div>
                          </div>
                            :
                            <NavItem>
                                <NavLinks to="/login"> <BsFillPersonFill className="iconNav" /> Entrar </NavLinks>
                            </NavItem>}







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
