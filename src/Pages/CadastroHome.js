import React from 'react';
import Navbar from '../Components/Navbar/index';
import Cadastro from '../Components/FormUser/index'
import Sidebar from '../Components/Sidebar/index';
import { useState } from 'react';
const Home2 = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar  toggle={toggle}/>
            <Cadastro/>
            

        </>
    )
}


export default Home2