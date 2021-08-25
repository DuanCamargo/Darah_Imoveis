import React from 'react'

import {
    SideBarContainer, 
    Icon, 
    CloseIcon, 
    SideBtnWrap, 
    SidebarLink, 
    SidebarRoute, 
    SidebarWrapper,
    SidebarMenu } from './SidebarStyle'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="/" onClick={toggle}>Anuncie</SidebarLink>
                    <SidebarLink to="/" onClick={toggle}>Contato</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/">Logout</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SideBarContainer>

        </>
    )
}

export default Sidebar