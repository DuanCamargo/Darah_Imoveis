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

    const init = {
        //Endereço
        estado:"",
        cidade:"",
        bairro:"",
        logradouro:"",
        numero:"",
        complemento:"",
        //Imovel
        tipo_imovel:"",
        metragem_imovel:"",
        qtd_num_pessoas:"",
        qtd_banheiro:"",
        //Quarto
        tipo_quarto:"",
        metragem_quarto:"",
        //Contas
        aluguel:"",
        iptu:"",
        condominio:"",
        internet:"",
        tv_cabo:"",
        agua:"",
        energia:"",
        gas:"",
        //Foto
        foto:"",
        descricao_foto:"",
        //Anuncio
        tipo_compartilhamento:"",
        detalhes_residencia:"",
        regras_residencia:"",
        detalhes_regiao:"",
        mapa_embed:"",
        detalhes_quarto:"",
        data_publicacao:"",
    }

    const [anuncio, setAnuncio] = useState(init)

    console.log("Id:")
    console.log(getId)

    useEffect(() => {
        GetAnunciosById(getId).then(response => {
            console.log("Response:")
            console.log(response)
            const data = {
                estado:"",
                cidade:"",
                bairro:"",
                logradouro:"",
                numero:"",
                complemento:"",
                tipo_imovel:"",
                metragem_imovel:"",
                qtd_num_pessoas:"",
                qtd_banheiro:"",

                tipo_quarto:"",
                metragem_quarto:"",

                aluguel:"",
                iptu:"",
                condominio:"",
                internet:"",
                tv_cabo:"",
                agua:"",
                energia:"",
                gas:"",

                foto:"",
                descricao_foto:"",

                tipo_compartilhamento:"",
                detalhes_residencia:"",
                regras_residencia:"",
                detalhes_regiao:"",
                mapa_embed:"",
                detalhes_quarto:"",
                data_publicacao:"",
            }
            data.estado = response.imovel.estado
            data.cidade = response.imovel.cidade
            data.bairro = response.imovel.bairro
            data.logradouro = response.imovel.logradouro
            data.numero = response.imovel.numero
            data.complemento = response.imovel.complemento
            data.tipo_imovel = response.imovel.tipo_imovel
            data.metragem_imovel = response.imovel.metragem_imovel
            data.qtd_num_pessoas = response.imovel.qtd_num_pessoas
            data.qtd_banheiro = response.imovel.qtd_banheiro

            data.tipo_quarto = response.imovel.quarto.tipo_quarto
            data.metragem_quarto = response.imovel.quarto.metragem_quarto

            data.aluguel = response.imovel.conta.aluguel
            data.iptu = response.imovel.conta.iptu
            data.condominio = response.imovel.conta.condominio
            data.internet = response.imovel.conta.internet
            data.tv_cabo = response.imovel.conta.tv_cabo
            data.agua = response.imovel.conta.agua
            data.energia = response.imovel.conta.energia
            data.gas = response.imovel.conta.gas

            data.foto = response.imovel.fotos.foto
            data.descricao_foto = response.imovel.fotos.descricao_foto

            data.tipo_compartilhamento = response.tipo_compartilhamento
            data.regras_residencia = response.regras_residencia
            data.detalhes_quarto = response.detalhes_quarto
            data.detalhes_residencia = response.detalhes_residencia
            data.detalhes_regiao = response.detalhes_regiao
            data.mapa_embed = response.mapa_embed
            data.data_publicacao = response.data_publicacao

            setAnuncio(data)

        }).catch(e =>{
            console.log(e)
        }) 
    },[])

    return (
        <>
                <ContainerGeral>
                    <ContainerWrapper>
                        <Column1>
                            <FotoImov>
                                <img src="https://media.gazetadopovo.com.br/haus/2015/09/bruno-colle-quarto-do-rapaz-la-1-1002x564-8c9c3a50.jpg" width="980" height="300"/>
                            </FotoImov>
                            <ItensText>
                                <DadosBancoPrice>
                                    <Price>R${anuncio.aluguel},00</Price>
                                    <TitleImov>
                                        <InfoImov>Tipo: {anuncio.tipo_imovel} |</InfoImov>
                                        <InfoImov>Compartilhamento: {anuncio.tipo_compartilhamento} |</InfoImov>
                                        <InfoImov>Imovel: {anuncio.metragem_imovel}m²|</InfoImov>
                                        <InfoImov>Quarto: {anuncio.metragem_quarto}m²</InfoImov>
                                    </TitleImov>
                                    <DivLocation>
                                            <LocationImov>
                                                <h4>Endereço: {anuncio.logradouro}, {anuncio.numero} - {anuncio.complemento} </h4>
                                                <InfoImov>Estado: {anuncio.estado}</InfoImov>
                                                <InfoImov>Cidade: {anuncio.cidade}</InfoImov>
                                                <InfoImov>Bairro: {anuncio.bairro}</InfoImov>
                                                {/* <InfoImov>Logradouro: Av. ACM</InfoImov> */}

                                            </LocationImov>

                                           
                                    </DivLocation>
                                </DadosBancoPrice>

                                <Description>
                                    <h4>Regras da Residência</h4>
                                    <p>{anuncio.regras_residencia}</p>
                                    <h4>Detalhes do Imóvel</h4>
                                    <p>{anuncio.detalhes_residencia}</p>
                                    <h4>Detalhes do Quarto</h4>
                                    <p>{anuncio.detalhes_quarto}</p>
                                    <h4>Detalhes do Residência</h4>
                                    <p>{anuncio.detalhes_regiao}</p>
                                </Description>
                            </ItensText>
                            <br></br>
                            <br></br>
                            <Description>
                            
                                <Embed>
                                    <h4>Localização no Mapa</h4>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31102.111676760607!2d-38.43240615!3d-12.986943449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b9fe863100f%3A0x648fc59cb8e4333f!2sFlat%20Garden%20of%20Allah!5e0!3m2!1sen!2sbr!4v1631224433879!5m2!1sen!2sbr" width="100%" height="100%"></iframe>
                                </Embed>
                            </Description>
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

                      