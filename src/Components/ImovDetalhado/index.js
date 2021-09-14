import React, { useEffect, useState } from 'react'
import {ContainerGeral, ContainerWrapper, Column1 ,Column2, Description, Chat, ItensText, Embed, FotoImov, DadosBancoPrice, Price, TitleImov, InfoImov, LocationImov, DivLocation}  from './ImovStyled'
import { useLocation } from 'react-router-dom'
import { GetAnunciosById } from '../../Service/GetAnuncioById'
import Chatbot from "react-chatbot-kit";
import config from './chatbot/config'
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider'
import '../../../src/App.css'


const ImovDetalhado = () => {
    let location = useLocation()
    const [getId, setGetId] = useState(location.state)

    console.log("Id:")
    console.log(getId)

    useEffect(() => {
        GetAnunciosById(getId).then(response => {
            console.log("Response:")
            console.log(response)
        }).catch(e =>{
            console.log(e)
        }) 
    },[])
    
    return (
        <>
                <ContainerGeral>
                   
                    <ContainerWrapper>
                        <Column1>

                            <FotoImov> </FotoImov>
                            <ItensText>
                                <DadosBancoPrice>
                                    <Price>R$435,00</Price>
                                    <TitleImov>
                                        <InfoImov>Apartamento |</InfoImov>
                                        <InfoImov>Tipo Compartilhamento |</InfoImov>
                                        <InfoImov> M² do Apt|</InfoImov>
                                        <InfoImov>Metragem do Quarto |</InfoImov>

                                       
                                    </TitleImov>
                                    <DivLocation>
                                            <LocationImov>
                                                <h4>Localização do imovel</h4>
                                                <InfoImov>Estado: BA</InfoImov>
                                                <InfoImov>Cidade: Salvador</InfoImov>
                                                <InfoImov>Bairro: Pituba</InfoImov>
                                                <InfoImov>Logradouro: Av. ACM</InfoImov>

                                            </LocationImov>

                                            <LocationImov>
                                                <h4>Detalhes do quarto</h4>
                                                <InfoImov>Estado: BA</InfoImov>
                                                <InfoImov>Cidade: Salvador</InfoImov>
                                                <InfoImov>Bairro: Pituba</InfoImov>
                                                <InfoImov>Logradouro: Av. ACM</InfoImov>
                                                
                                            </LocationImov>
                                    </DivLocation>
                                </DadosBancoPrice>
                                <Description>
                                    <h2>Sobre este imovel</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and 
                                    typesetting industry. Lorem Ipsum has been the industry's
                                     standard dummy text ever since the 1500s, when an unknown
                                      printer took a galley of type and scrambled it to make a 
                                      type specimen book. It has survived not only five centuries, 
                                      but also the leap into electronic typesetting, remaining essentially
                                       unchanged. It was popularised in the 1960s with the release of 
                                       Letraset sheets containing Lorem Ipsum passages, and more recently
                                        with desktop publishing software like Aldus PageMaker including 
                                        versions of Lorem Ipsum.</p>
                                </Description>
                            </ItensText>
                            <Embed>
                               
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.553351792198!2d-38.47057178100766!3d-12.962998453065593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161ae8793fb1ef%3A0x404ac423b6c4253!2sCabula%2C%20Salvador%20-%20BA%2C%2040301-110!5e0!3m2!1spt-BR!2sbr!4v1631046599064!5m2!1spt-BR!2sbr" width="100%" height="100%"   loading="lazy"></iframe>
                               
                            </Embed>
                        </Column1>
                        <Column2>
                            <Chat>  

                            <Chatbot
                                config={config}
                                messageParser={MessageParser}
                                actionProvider={ActionProvider}
                                />
                            </Chat>
                        </Column2>
                    </ContainerWrapper>

                    
                </ContainerGeral>
        </>
    )
}

export default ImovDetalhado

                      