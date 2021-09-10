import React from 'react';
import Navbar from '../Components/Navbar/index';
import CadastroAnuncio from '../Components/FormImovel/CadAnuncio/index.js';
import Sidebar from '../Components/Sidebar/index';
import { useState } from 'react';
import Footer from '../Components/Footer/index'

const CadAnuncio = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar  toggle={toggle}/>
           
            <CadastroAnuncio />
            <Footer/>
        </>
    )
}


export default CadAnuncio