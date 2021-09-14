import React, { useEffect } from 'react'
import * as R from './SidebarFilterStyle.js'
import { useState } from 'react'
import Anuncios from '../../Service/AnuncioService'
import * as S from 'reactstrap';
import {RiFilter2Line} from 'react-icons/ri'
import { GetAllAnuncios } from '../../Service/GetAllAnuncios.js';
import { useHistory } from 'react-router-dom';

const AnuncioTela = () => {

    var history = useHistory()

    const [images, setImage] = useState("")

    const initialCadastroState = {
        minValue: "",
        maxValue: "",
        localidade: "",
        moradia:"",
        compartilhamento:""
     };
    const [input, setInput] = useState(initialCadastroState)
    const [anuncios, setAnuncios] = useState([]);
    const [maxPage, setMaxPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (e, index) => {
        e.preventDefault();
        setCurrentPage(index);
    };

    const handlePreviousClick = (e) => {
        e.preventDefault();
        setCurrentPage(currentPage - 1);
    };

    const handleNextClick = (e) => {
        e.preventDefault();
        setCurrentPage(currentPage + 1);
    };

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
        setInput({ ...input, [name]: value }); 
    }

    const SendForm = (e) =>{
        e.preventDefault();
    }
    
    useEffect (() => {
        GetAllAnuncios().then(response => {
            setAnuncios(response)
        })
        .catch(e => {
            console.log(e)
        })
    },[])

    console.log(anuncios)

    const blobToImage = (blob) => {
  
        // var arrayBufferView = new Uint8Array(blobb);                                       
        // var blob = new Blob( [ arrayBufferView ], { type: "image/*"  } );
        // var urlCreator = window.URL || window.webkitURL;
        // var imageUrl = urlCreator.createObjectURL( blob );  
        // setImage(imageUrl)
       
        // return new Promise(resolve => {
        //   const url = URL.createObjectURL(new Blob(blob))
          
        //   let img = document.querySelector("#image")
        //   img.onload = () => {
        //     URL.revokeObjectURL(url)
        //     resolve(img)
        //   }
        //   img.src = url
        // })  
    }

    
    return (
        <R.ContainerGeral>
            <R.ContainerGeralInterno1>
                <R.HeaderContainerFont> <RiFilter2Line/> Filtrar</R.HeaderContainerFont>
                <R.DivSeparatorAnuncioX/>
                <R.HeaderContainerFont></R.HeaderContainerFont>
                    <form onSubmit={SendForm} >

                        <div className="form-group mt-4">
                            <label htmlFor="minValue">Preço: </label>
                            <div className="d-flex align-items-center justify-content-between">
                                <R.InputDefaultFormFilterValue autoComplete="off" type="number" id="minValue"  name="minValue" placeholder="Valor Mín." onChange={handleInputChange} required /> -
                                <R.InputDefaultFormFilterValue autoComplete="off" type="number" id="maxValue"  name="maxValue" placeholder="Valor Máx." onChange={handleInputChange} required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Localidade:</label>
                            <R.InputDefaultFormFilterText autoComplete="off" type="bairro" id="InputBairro" name="bairro" aria-describedby="bairroHelp" placeholder="Insira o Bairro" onChange={handleInputChange} required/>
                        </div>

                        <div className="form-group">
                        <label htmlFor="moradia">Tipo de moradia</label>
                            <R.InputSelectDefaultFormFilter onChange={handleInputChange} required>
                                <option value="" hidden>
                                Clique para selecionar
                                </option>
                                <option value="1">Casa</option>
                                <option value="2">Apartamento</option>
                            </R.InputSelectDefaultFormFilter>
                        </div>

                        <div className="form-group">
                            <label htmlFor="compartilhamento">Tipo de compartilhamento</label>
                                <R.InputSelectDefaultFormFilter onChange={handleInputChange} required>
                                <option value="" hidden>
                                Clique para selecionar
                                </option>
                                <option value="1">Quarto e residência</option>
                                <option value="2">Residência</option>
                            </R.InputSelectDefaultFormFilter>
                        </div>

                        <div className="col text-center">
                            <R.ButtonStyledFormFilter primary type="submit">Filtrar</R.ButtonStyledFormFilter>
                        </div>
                    
                    </form>
            </R.ContainerGeralInterno1>

            <R.ContainerGeralInterno2>
                <R.PaginationPink
                    className='pagination justify-content-end ml-5 align-bottom paginacao'
                    listClassName='justify-content-end mb-0'>
                        <S.PaginationItem disabled={currentPage <= 0}  >
                            <S.PaginationLink
                            onClick={handlePreviousClick}
                            first
                            href='#'
                            />
                        </S.PaginationItem>
                        {[...Array(pageCount)].map((page, i) => (
                            <S.PaginationItem active={i === currentPage} key={i}>
                                <S.PaginationLink
                                        onClick={(e) => handlePageClick(e, i)}
                                        href='#'
                                >
                                {i + 1}
                                </S.PaginationLink>
                            </S.PaginationItem>
                        ))}

                            <S.PaginationItem disabled={currentPage === pageCount -1}>
                                <S.PaginationLink
                                    onClick={handleNextClick}
                                    last
                                    href='#'
                                />     
                            </S.PaginationItem>
                </R.PaginationPink>
                {anuncios && anuncios.slice(currentPage * pageSize,(currentPage + 1) * pageSize).map((anuncio) => {
                    return (
                    <R.ImovelContainer key={anuncio.id_anuncio}>
                        <R.ContainerImageInside>
                            <R.RoundedImg id="imagem" src="https://www.tuacasa.com.br/wp-content/uploads/2016/07/33-cinza-espelhado-1024x767.jpg"width="300px"></R.RoundedImg>                            
                        </R.ContainerImageInside>

                        <R.ContainerImovelInfos className="">

                            <R.ContainerImovelInside1 className="d-flex justify-content-around ml-3">

                               
                                <div className="ml-3 mr-3 mt-1">{anuncio.imovel.cidade}</div>
                                    <R.DivSeparatorAnuncioY/>
                                <div className="ml-3 mr-3 mt-1">{anuncio.imovel.bairro}</div>
                                    <R.DivSeparatorAnuncioY/>
                                <div className="mr-3 mt-1">{anuncio.imovel.tipo_imovel}</div>
                                <R.DivSeparatorAnuncioY/>
                                <div className="ml-3 mt-1">{anuncio.tipo_compartilhamento}</div>

                            </R.ContainerImovelInside1>

                            <R.DivSeparatorAnuncioX className="mt-1 mb-1"/>

                            <R.ContainerImovelInside2 className="d-flex justify-content-around">

                                <R.DivTextValue className="ml-3 mr-3">
                                    <R.TextValue>Aluguel: R$ {anuncio.imovel.conta.aluguel},00</R.TextValue>
                                </R.DivTextValue>
                            
                                <R.DivSeparatorAnuncioY/>

                                <R.DivTextDescription className="ml-auto mr-auto">
                                    Endereço: {anuncio.imovel.logradouro}, {anuncio.imovel.numero}
                                </R.DivTextDescription>

                            </R.ContainerImovelInside2>

                            <R.DivSeparatorAnuncioX className="mt-1"/>

                            <R.ContainerImovelInside3 className="d-flex justify-content-between">
                                <div className="ml-3 mr-3">
                                    {anuncio.fornecedor}
                                </div>
                                <R.ButtonStyledFormFilterAcess onClick={() => {
                                    history.push({
                                        pathname: "/detalhe",
                                        state: anuncio.imovel.id_imovel,
                                    })
                                }}> 
                                Detalhes
                                </R.ButtonStyledFormFilterAcess>
                                {/* Acessar anuncio {anuncio.imovel.id_imovel} */}
                            </R.ContainerImovelInside3>

                        </R.ContainerImovelInfos>
                        
                    </R.ImovelContainer>
                    )
                })}

                <R.PaginationPink
                    className='pagination justify-content-end ml-5 align-bottom paginacao'
                    listClassName='justify-content-end mb-0'>
                        <S.PaginationItem disabled={currentPage <= 0}  >
                            <S.PaginationLink
                            onClick={handlePreviousClick}
                            first
                            href='#'
                            />
                        </S.PaginationItem>

                        {[...Array(pageCount)].map((page, i) => (
                            <S.PaginationItem active={i === currentPage} key={i}>
                                <S.PaginationLink
                                    onClick={(e) => handlePageClick(e, i)}
                                    href='#'
                                >
                                    {i + 1}
                                </S.PaginationLink>
                            </S.PaginationItem>
                        ))}

                        <S.PaginationItem disabled={currentPage === pageCount -1}>
                            <S.PaginationLink
                                onClick={handleNextClick}
                                last
                                href='#'
                            />
                        </S.PaginationItem>
                </R.PaginationPink>
            </R.ContainerGeralInterno2>
    
        </R.ContainerGeral>
    )
}

export default AnuncioTela