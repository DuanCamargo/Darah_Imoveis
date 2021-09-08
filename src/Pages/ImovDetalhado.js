import React,{useState} from 'react'
import Navbar from '../Components/Navbar/index';
import Sidebar from '../Components/Sidebar/index';
import ImovDetalhado  from '../Components/ImovDetalhado/index';
import Footer from '../Components/Footer/index'


const TelaImovDetalhado = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar  toggle={toggle}/>
            <ImovDetalhado/>
            <Footer/>
        </>
    )
}

export default TelaImovDetalhado
