import React from 'react';
import Navbar from '../Components/Navbar/index';
import Anuncio from '../Components/FormImov/index'
import Sidebar from '../Components/Sidebar/index';
import { useState } from 'react';
const Home3 = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar  toggle={toggle}/>
            <Anuncio/>
        </>
    )
}


export default Home3