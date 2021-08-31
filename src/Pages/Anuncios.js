import React from 'react';
import Navbar from '../Components/Navbar/index';
import Sidebar from '../Components/Sidebar/index';
import SidebarFilter from '../Components/SidebarFilter/index'
import { useState } from 'react';

const Anuncios = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar  toggle={toggle}/>
            <SidebarFilter/>
            

        </>
    )
}


export default Anuncios