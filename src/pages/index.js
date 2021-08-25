import React from 'react';
import Navbar from '../Components/Navbar/index';
import SectionHome from '../Components/SectionHome/index';
import Sidebar from '../Components/Sidebar/index';
import { useState } from 'react';
const Home = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar  toggle={toggle}/>
            <SectionHome/>
            

        </>
    )
}


export default Home