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
                            <TopH1>Quem somos nós?</TopH1>
                            <TopP>Alunos do curso de programação do Hub Salvador</TopP>
                            <Description>Somos uma equipe de alunos do turno vespertino do curso de programação FullStack do HubSalvador,
                                apaixonados por programação, design e tudo mais relacionado ao mundo digital.</Description>
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
