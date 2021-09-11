import React from 'react';
import Navbar from '../Components/Navbar/index';
import CadastroValores from '../Components/FormImovel/CadValores/index';
import Sidebar from '../Components/Sidebar/index';
import { useState } from 'react';
import Footer from '../Components/Footer/index'

const CadValores = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar  toggle={toggle}/>
           
            <CadastroValores />
            <Footer/>
        </>
    )
}


export default CadValores