import React from 'react';
import Navbar from '../Components/Navbar/index';
import Sidebar from '../Components/Sidebar/index';
import MeusAnuncios from '../Components/SectionMyAds/index';
import { useState } from 'react';
import Footer from '../Components/Footer/index'

const MyAds = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar  toggle={toggle}/>
            <MeusAnuncios/>           
            <Footer/>
        </>
    )
}


export default MyAds