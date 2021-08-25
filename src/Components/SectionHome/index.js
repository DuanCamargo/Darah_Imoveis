import React from 'react'
import Video from '../../Video/home.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, InputVideo, InputDiv, InputContainer  } from './SectionStyle'
import { Button } from './ButtonStyle'


const SectionHome = () => {
    return (
        <>
      
            <HeroContainer >
                
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
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
                                    
                                    <Button type="submit">Procurar</Button> 

                                </InputContainer>
                           
                    </HeroContent>
            </HeroContainer>
        </>
    )
}

export default SectionHome
