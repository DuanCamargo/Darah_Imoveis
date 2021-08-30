import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

export const SideBarContainer = styled.aside`
    border-radius: 10px;
    position: fixed;
    z-index: 999;
    width: 60%;
    height: 100%;
    background: #c9d8c5;
    display: grid;
    align-items: center;
    margin-top: 2px;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%': '0')};
    right: ${({isOpen}) => (isOpen ? '0': '-80%')};
    
   
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
    margin: 2px 12px;
`

export const Icon = styled.div`
    position: absolute;
    top: 0.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export  const SidebarWrapper = styled.div`
    margin-top: -70%;
    color: #fff;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 40px);
    text-align: center;
    @media screen and (max-width: 480px){
        grid-template-rows: repeat (6, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    &:hover {
        text-decoration: none;
        list-style: none;
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 1px 20px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #010606;
        text-decoration: none;
  
    }
`