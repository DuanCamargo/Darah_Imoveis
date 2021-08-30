import React from 'react'
import {BsSearch} from 'react-icons/bs'
import Video from '../../Video/home.mp4'

import '../../../src/App.css'


import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    InputVideo, 
    InputDiv, 
    InputContainer, 
    Button  } from './SectionStyle'



const SectionHome = () => {

    // const [aleatorio, setAleatorio] = useState(1) 


    // useEffect(() => {
    //     setAleatorio(Math.floor((Math.random() * 5) + 1))
    //   }, [])
    return (
        <>
      
            <HeroContainer >
                
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video}type='video/mp4'></VideoBg>
                </HeroBg>
                    <HeroContent>
                        <HeroH1>Procure o seu imovel</HeroH1>
                        <HeroP>Coloque o seu endereço para encontrarmos um imovel proximo a você</HeroP>
                           
                                <InputContainer>
                                    <InputDiv>
                                        <InputVideo type="text" placeholder="Informe o estado "></InputVideo>
                                    </InputDiv>
                                    <InputDiv>
                                        <InputVideo type="text" placeholder="Informe a cidade "></InputVideo>
                                    </InputDiv>
                                    
                                    <Button type="submit" >Procurar <BsSearch className="iconPesquisar"/> </Button> 

                                </InputContainer>
                           
                    </HeroContent>
            </HeroContainer>
        </>
    )
}

export default SectionHome
