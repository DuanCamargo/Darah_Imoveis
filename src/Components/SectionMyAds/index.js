import React, { useEffect } from 'react'
import * as R from './MyAdsStyle.js'
import { useState } from 'react'
import MyAds from '../../Service/MeusAnunciosService'
import * as S from 'reactstrap';
import {RiShieldUserLine} from 'react-icons/ri'
import {RiCommunityLine} from 'react-icons/ri'

const MeusAnunciosTela = () => {

    const initialAnunciosState = {
        nome: "",
        sobrenome: "",
        email: "",
        senha:"",
        telefone:""
     };
   
    const [input, setInput] = useState(initialAnunciosState)
    const [meusAnuncios, setMeusAnuncios] = useState([]);

    const retrieveMeusAnuncios = () => {
        /* meusAnuncios.getAll()
            .then(({data}) => {
                setMeusAnuncios(data);
            })
            .catch((e) => console.log(e)); */
    };

    useEffect (() => {
        retrieveMeusAnuncios();
        /* meusAnuncios.getAll().then(
            ({data})=>{
                console.log(data)
                setMeusAnuncios(data)
            }
        ) */
    },[])

    useEffect (() => {
        console.log(meusAnuncios)
    },[meusAnuncios])

    return (
        <R.ContainerGeral>
            <R.ContainerGeralInterno1>
                
               <R.HeaderContainerFont> <RiShieldUserLine/> Dados do usuário </R.HeaderContainerFont>

               <R.HeaderContainerFont> <R.DivSeparatorMeusAnunciosX/> </R.HeaderContainerFont>

                <div> <label htmlFor="Nome">Nome: </label> </div>
                
                <div> <label htmlFor="Sobrenome">Sobrenome: </label> </div>
                
                <div> <label htmlFor="Telefone">Telefone: </label> </div>
                
                <div> <label htmlFor="Email">Email: </label> </div>
                
                <div> <label htmlFor="Senha">Senha: </label> </div>

            </R.ContainerGeralInterno1>

            <R.ContainerGeralInterno2>

            <R.HeaderContainerFont> <RiCommunityLine/> Meus anuncios </R.HeaderContainerFont>

            <R.HeaderContainerFont> <R.DivSeparatorMeusAnunciosX/> </R.HeaderContainerFont>

                {meusAnuncios.map((anuncios) => {
                    return( 
                        <R.ImovelContainer key={anuncios.id}>
                        <R.ContainerImageInside>
                            <R.RoundedImg src="https://picsum.photos/320/250"></R.RoundedImg>
                        </R.ContainerImageInside>


                        <R.ContainerImovelInfos className="">

                            <R.ContainerImovelInside1 className="d-flex justify-content-around ml-3">

                                <div className="mr-3 mt-1">{anuncios.moradiaTip}</div>
                                    <R.DivSeparatorMeusAnunciosY/>
                                <div className="ml-3 mr-3 mt-1">{anuncios.cidade}</div>
                                    <R.DivSeparatorMeusAnunciosY/>
                                <div className="ml-3 mr-3 mt-1">{anuncios.bairro}</div>
                                    <R.DivSeparatorMeusAnunciosY/>
                                <div className="ml-3 mt-1">{anuncios.rua}</div>

                            </R.ContainerImovelInside1>

                            <R.DivSeparatorMeusAnunciosX className="mt-1 mb-1"/>

                            <R.ContainerImovelInside2 className="d-flex justify-content-around">

                                <R.DivTextValue className="ml-3 mr-3">
                                    <R.TextValue>R$ {anuncios.valor}</R.TextValue>
                                </R.DivTextValue>
                            
                                <R.DivSeparatorMeusAnunciosY/>

                                <R.DivTextDescription className="ml-auto mr-auto">
                                    {anuncios.informacoes}
                                </R.DivTextDescription>

                            </R.ContainerImovelInside2>

                            <R.DivSeparatorMeusAnunciosX className="mt-1"/>

                            <R.ContainerImovelInside3 className="d-flex justify-content-between">
                                <div className="ml-3 mr-3">
                                    {anuncios.fornecedor}
                                </div>
                                <R.ButtonStyledFormFilterAcess>Acessar anuncio</R.ButtonStyledFormFilterAcess>
                            </R.ContainerImovelInside3>

                        </R.ContainerImovelInfos>
                        
                    </R.ImovelContainer>
                    )
                })}
            </R.ContainerGeralInterno2>
            
        </R.ContainerGeral>
    )
}

export default MeusAnunciosTela