import styled from 'styled-components'

import {Link as LinkR} from "react-router-dom"

export const Nav = styled.nav`
    background: #c9d8c5;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (min-width: 960px){
        transition:0.8 all ease;
    }
`

export const NavbarContainer = styled.div`

    display: flex;
    justify-content: space-between;
    height: 0px;
    z-index: 1;
    width : 100%;
    padding : 0 24px;
    max-width : 1100px;
    
`
export const NavLogo = styled(LinkR)`

    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display:flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration:none;

     &:hover {
        text-decoration: none;
        color:#fff;
    }
`

export const MobileIcon = styled.div`
    display:none;
    
    @media screen and (max-width: 768px){
        margin: -17px 0px;
        display: block;
        position: absolute;
        top: 0;
        padding-bottom: -20px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    
    
    @media screen and (max-width: 768px){
        display:none;
    }
`

export const NavItem = styled.li`

  text-decoration:none;
`

export const NavLinks = styled(LinkR)`

    color: #ab4100;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    


    &:hover {
        text-decoration: none;
        color:#fff;
    }
    
`
export const Teste = styled.div`
 background-color: blue;
`

export const NavBtn = styled.nav`
    display:flex;
    align-items: center;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #009E10 ;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background:  #01BF71;
        color: #fff;
        text-decoration: none;
    }
`