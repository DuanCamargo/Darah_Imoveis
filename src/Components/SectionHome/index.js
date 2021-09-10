import React from 'react'
import {BsSearch} from 'react-icons/bs'
import Video from '../../Video/home.mp4'

import '../../../src/App.css'


import * as R from './SectionStyle'



const SectionHome = () => {

    // const [aleatorio, setAleatorio] = useState(1) 


    // useEffect(() => {
    //     setAleatorio(Math.floor((Math.random() * 5) + 1))
    //   }, [])
    return (
        <>
      
            <R.HeroContainer >
                
                <R.HeroBg>
                    <R.VideoBg autoPlay loop muted src={Video}type='video/mp4'></R.VideoBg>
                </R.HeroBg>
                    <R.HeroContent>
                        <R.HeroH1>PROCURE O SEU IMOVEL</R.HeroH1>
                        <R.HeroP>Digite o seu endereço para encontrarmos um imóvel proximo a você</R.HeroP>
                           
                                <R.InputContainer className="d-flex justify-content-center">
                                    <R.InputDiv>
                                        <R.InputVideo1 type="text" placeholder="Estado "></R.InputVideo1>
                                    </R.InputDiv>
                                    <R.InputDiv>
                                        <R.InputVideo2 type="text" placeholder="Cidade "></R.InputVideo2>
                                    </R.InputDiv>
                                    
                                    <R.Button type="submit"><BsSearch className="iconPesquisar"/> </R.Button> 
                                </R.InputContainer>    
                    </R.HeroContent>
            </R.HeroContainer>
        </>
    )
}

export default SectionHome
