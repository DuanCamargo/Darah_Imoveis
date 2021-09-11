import React from 'react';
import Navbar from '../Components/Navbar/index';
import CadastroQuartos from '../Components/FormImovel/CadQuarto/index';
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
           
            <CadastroQuartos />
            <Footer/>
        </>
    )
}


export default CadValores