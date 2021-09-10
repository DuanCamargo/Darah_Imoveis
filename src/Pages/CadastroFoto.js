import React from 'react';
import Navbar from '../Components/Navbar/index';
import CadastroFoto from '../Components/FormImovel/CadFoto/index';
import Sidebar from '../Components/Sidebar/index';
import { useState } from 'react';
import Footer from '../Components/Footer/index'

const CadFoto = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar  toggle={toggle}/>
           
            <CadastroFoto />
            <Footer/>
        </>
    )
}


export default CadFoto