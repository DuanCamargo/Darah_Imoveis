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
             <SectionContainer>
                    <InfoH1>Anúncios proximos de você!</InfoH1>
                    <InfoP>Veja abaixo informações sobre anúncios proximo a sua localidade</InfoP>
               
                <CardContainer>
                
                    <CardInfo>
                        <NomeIcon>House type</NomeIcon>
                        <Icon src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"/>
                        <IconPrice>R$400</IconPrice>
                        <NomeIcon>Type of room</NomeIcon>
                        <LocationIcon>Pituba</LocationIcon>
                        <ButtonIcon>View details</ButtonIcon>
                    </CardInfo>

                    <CardInfo>
                        <NomeIcon>House type</NomeIcon>
                        <Icon src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"/>
                        <IconPrice>R$400</IconPrice>
                        <NomeIcon>Type of room</NomeIcon>
                        <LocationIcon>Pituba</LocationIcon>
                        <ButtonIcon>View details</ButtonIcon>
                    </CardInfo>

                    <CardInfo>
                        <NomeIcon>House type</NomeIcon>
                        <Icon src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"/>
                        <IconPrice>R$400</IconPrice>
                        <NomeIcon>Type of room</NomeIcon>
                        <LocationIcon>Pituba</LocationIcon>
                        <ButtonIcon>View details</ButtonIcon>
                    </CardInfo>

                    <CardInfo>
                        <NomeIcon>House type</NomeIcon>
                        <Icon src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"/>
                        <IconPrice>R$400</IconPrice>
                        <NomeIcon>Type of room</NomeIcon>
                        <LocationIcon>Pituba</LocationIcon>
                        <ButtonIcon>View details</ButtonIcon>
                    </CardInfo>
                
                
                </CardContainer>

            </SectionContainer>
            
        </>
    )
}

export default SectionCard
