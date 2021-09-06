import React from 'react';
import Navbar from '../Components/Navbar/index';
import CadastroQuartos from '../Components/FormImovel/CadQuartos/index';
import Sidebar from '../Components/Sidebar/index';
import { useState } from 'react';

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
        </>
    )
}


export default CadValores