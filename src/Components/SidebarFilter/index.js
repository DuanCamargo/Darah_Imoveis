import React, { useEffect } from 'react'
import * as R from './SidebarFilterStyle.js'
import { useState } from 'react'
import Anuncios from '../../Service/AnuncioService'
import * as S from 'reactstrap';
import {RiFilter2Line} from 'react-icons/ri'

const AnuncioTela = () => {

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

    const retrieveAnuncios = () => {
        Anuncios.getAll()
            .then(({data}) => {
                setAnuncios(data);
                setPageCount(Math.ceil(data.length / pageSize));
                console.log(pageCount)
            })
            .catch((e) => console.log(e));
    };

    const handleInputChange = (event) =>{
        
        const {name, value} = event.target;
            setInput({ ...input, [name]: value });
            
    }

    const SendForm = (e) =>{
        e.preventDefault();
        /* PostForm(input); */
    }
    
    useEffect (() => {
        retrieveAnuncios();
        Anuncios.getAll().then(
            ({data})=>{
                /* console.log(data) */
                setAnuncios(data)
            }
        )
    },[])

    useEffect (() => {
        console.log(anuncios)
    },[anuncios])

    return (
        <R.ContainerGeral>
            <R.ContainerGeralInterno1>
            <R.DivSeparatorAnuncioX/>
               <R.HeaderContainerFont> <RiFilter2Line/> Filtrar</R.HeaderContainerFont>
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
                    <R.ImovelContainer key={anuncio.id}>
                        <R.ContainerImageInside>
                            <R.RoundedImg src="https://picsum.photos/320/250"></R.RoundedImg>
                        </R.ContainerImageInside>

                        <R.ContainerImovelInfos className="">

                            <R.ContainerImovelInside1 className="d-flex justify-content-around ml-3">

                                <div className="mr-3 mt-1">{anuncio.moradiaTip}</div>
                                    <R.DivSeparatorAnuncioY/>
                                <div className="ml-3 mr-3 mt-1">{anuncio.cidade}</div>
                                    <R.DivSeparatorAnuncioY/>
                                <div className="ml-3 mr-3 mt-1">{anuncio.bairro}</div>
                                    <R.DivSeparatorAnuncioY/>
                                <div className="ml-3 mt-1">{anuncio.rua}</div>

                            </R.ContainerImovelInside1>

                            <R.DivSeparatorAnuncioX className="mt-1 mb-1"/>

                            <R.ContainerImovelInside2 className="d-flex justify-content-around">

                                <R.DivTextValue className="ml-3 mr-3">
                                    <R.TextValue>R$ {anuncio.valor}</R.TextValue>
                                </R.DivTextValue>
                            
                                <R.DivSeparatorAnuncioY/>

                                <R.DivTextDescription className="ml-auto mr-auto">
                                    {anuncio.informacoes}
                                </R.DivTextDescription>

                            </R.ContainerImovelInside2>

                            <R.DivSeparatorAnuncioX className="mt-1"/>

                            <R.ContainerImovelInside3 className="d-flex justify-content-between">
                                <div className="ml-3 mr-3">
                                    {anuncio.fornecedor}
                                </div>
                                <R.ButtonStyledFormFilterAcess>Acessar anuncio</R.ButtonStyledFormFilterAcess>
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