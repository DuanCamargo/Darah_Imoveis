import React from 'react'
import { 
    CardContainer, 
    CardInfo, 
    InfoP, 
    InfoH1, 
    Icon, 
    SectionContainer, 
    NomeIcon, 
    IconPrice, 
    LocationIcon,
    ButtonIcon } from './CardStyle'

const SectionCard = () => {
    return (
        <>
             <SectionContainer id="card">
                   <a href="#card"> <InfoH1>Anúncios lançados recentemente!!</InfoH1> </a>
                    <InfoP>Veja abaixo informações sobre anúncios proximo a sua localidade</InfoP>
               
                <CardContainer>
                    <CardInfo>
                        <Icon src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"/>
                        <IconPrice>R$385</IconPrice>
                        <NomeIcon>Quarto</NomeIcon>
                        <LocationIcon>Comercio</LocationIcon>
                        <ButtonIcon>View details</ButtonIcon>
                    </CardInfo>

                    <CardInfo>
                        <Icon src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"/>
                        <IconPrice>R$800</IconPrice>
                        <NomeIcon>Quarto</NomeIcon>
                        <LocationIcon>Cabula</LocationIcon>
                        <ButtonIcon>View details</ButtonIcon>
                    </CardInfo>

                    <CardInfo>
                        <Icon src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"/>
                        <IconPrice>R$450</IconPrice>
                        <NomeIcon>Residência</NomeIcon>
                        <LocationIcon>Pituba</LocationIcon>
                        <ButtonIcon>View details</ButtonIcon>
                    </CardInfo>

                    <CardInfo>
                        <Icon src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"/>
                        <IconPrice>R$630</IconPrice>
                        <NomeIcon>Quarto</NomeIcon>
                        <LocationIcon>Cajazeiras</LocationIcon>
                        <ButtonIcon>View details</ButtonIcon>
                    </CardInfo>
                
                </CardContainer>

                <CardContainer>
                
                    <CardInfo>
                        <Icon src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"/>
                        <IconPrice>R$812</IconPrice>
                        <NomeIcon>Residência</NomeIcon>
                        <LocationIcon>Brotas</LocationIcon>
                        <ButtonIcon>View details</ButtonIcon>
                    </CardInfo>

                    <CardInfo>
                        <Icon src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"/>
                        <IconPrice>R$650</IconPrice>
                        <NomeIcon>Quarto</NomeIcon>
                        <LocationIcon>Lobato</LocationIcon>
                        <ButtonIcon>View details</ButtonIcon>
                    </CardInfo>

                    <CardInfo>
                        <Icon src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"/>
                        <IconPrice>R$500</IconPrice>
                        <NomeIcon>Residência</NomeIcon>
                        <LocationIcon>Barra</LocationIcon>
                        <ButtonIcon>View details</ButtonIcon>
                    </CardInfo>

                    <CardInfo>
                        <Icon src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"/>
                        <IconPrice>R$580</IconPrice>
                        <NomeIcon>Residência</NomeIcon>
                        <LocationIcon>São Rafael</LocationIcon>
                        <ButtonIcon>View details</ButtonIcon>
                    </CardInfo>
                
                </CardContainer>

            </SectionContainer>
            
        </>
    )
}

export default SectionCard
