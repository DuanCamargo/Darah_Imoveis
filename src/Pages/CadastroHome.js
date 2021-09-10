import React from 'react';
import Navbar from '../Components/Navbar/index';
import Cadastro from '../Components/FormUser/index'
import Sidebar from '../Components/Sidebar/index';
import {ImgSvg2} from '../Components/FormUser/Svg'
import { useState } from 'react';
import Footer from '../Components/Footer/index'

const Home2 = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar  toggle={toggle}/>
            <Cadastro {...ImgSvg2}/>
            <Footer/>
        </>
    )
}


export default Home2