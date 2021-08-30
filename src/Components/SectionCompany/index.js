import React from 'react'
// import Image from './svg-1.svg'


import { 
    CompanyContainer,
    CompanyWrapper, 
    Column1, 
    Column2, 
    Img, 
    TextWrap, 
    TopH1, 
    TopP, 
    Description } from './CompanyStyle'


const SectionCompany = ({img,alt}) => {
    return (
        <>
            <CompanyContainer>
                
                <CompanyWrapper >
                    <Column1>
                        <TextWrap>
                            <TopH1>Alguma coisa aqui</TopH1>
                            <TopP>Legenda aqui</TopP>
                            <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
                                an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                 It has survived not only five centuries, but also the leap into electronic typesetting,
                                  remaining essentially unchanged. It was popularised in the 1960s with the release
                                   of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Description>
                        </TextWrap>
                    </Column1>

                    <Column2>
                        
                            <Img id="image" src={img} alt={alt}/>
                       
                    </Column2>
                </CompanyWrapper>
            </CompanyContainer>
        </>
    )
}

export default SectionCompany
