import styled from 'styled-components'

import {Link as LinkR} from "react-router-dom"

export const Nav = styled.nav`
    background: white;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
   
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

    color: black;
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
        color: #ab4100;
    }
`

export const MobileIcon = styled.div`
    display:none;
    
    @media screen and (max-width: 905px){
        margin: -17px 0px;
        display: block;
        position: absolute;
        top: 0;
        padding-bottom: -20px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    
    
    @media screen and (max-width: 905px){
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
    font-size: 15px;
    
    


    &:hover {
        text-decoration: none;
        color:#000;
    }
    
`


export const NavBtn = styled.nav`
    display:flex;
    align-items: center;
    @media screen and (max-width: 905px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #f2be38 ;
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
        background:  #B58E2A;
        color: #fff;
        text-decoration: none;
    }
`

// export const Dropdown = styled.div`
//     position: relative;
//     display: inline-block;    
    
// `
// export const DropdownCont = styled.div`
//     display: none;
//     border-radius:  0 0 20px 20px ;
//     position: absolute;
//     background-color:  #c9d8c5;
//     min-width: 190px;
//     z-index: 1;

    
// `

// export const DropdownA = styled.a`
//     color: black;
//     margin-top: 10px;
//     padding: 12px 16px;
//     border-radius:  0 0 20px 20px ;
//     text-decoration: none;
//     display: block;

//     &:hover{
//         color:aqua;
//     }
//  `