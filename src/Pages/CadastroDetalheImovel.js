import React from 'react';
import Navbar from '../Components/Navbar/index';
import CadastroDetalheImovel from '../Components/ImovDetalhado/index';
import Sidebar from '../Components/Sidebar/index';
import { useState } from 'react';
import Footer from '../Components/Footer/index'

const DetalheImovel = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar  toggle={toggle}/>
           
            <CadastroDetalheImovel />
            <Footer/>
        </>
    )
}

export default DetalheImovel