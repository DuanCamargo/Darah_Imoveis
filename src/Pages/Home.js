import React from 'react';
import Navbar from '../Components/Navbar/index';
import SectionHome from '../Components/SectionHome/index';
import Sidebar from '../Components/Sidebar/index';
import SectionCard from '../Components/SectionCard/index';
import {ImgSvg} from '../Components/SectionCompany/SVG'
import Footer from '../Components/Footer/index'
import { useState } from 'react';
import SectionCompany from '../Components/SectionCompany';

const Home = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar  toggle={toggle}/>
            <SectionHome />
            <SectionCard/>
            <SectionCompany {...ImgSvg}/>
            <Footer/>
            

        </>
    )
}


export default Home