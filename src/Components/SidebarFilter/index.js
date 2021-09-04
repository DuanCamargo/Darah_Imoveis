import React, { useEffect } from 'react'
import * as S from './SidebarFilterStyle.js'
import { useState } from 'react'
import Anuncios from '../../Service/AnuncioService'


const AnuncioTela = () => {

    const initialCadastroState = {
        minValue: "",
        maxValue: "",
        email: "",
        senha:"",
        telefone:""
     };



    
    const [input, setInput] = useState(initialCadastroState)
    const [anuncios, setAnuncios] = useState([]);
    const [maxPage, setMaxPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [pageSize, setPageSize] = useState(4);
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
                anuncios(data);
                setPageCount(Math.ceil(data.length / pageSize));
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
        console.log("Anuncios:", anuncios)
    },[anuncios])

    
   

    return (
        <S.FormContainerGeral>
            <S.FilterContainer>
            <form onSubmit={SendForm} >

            <div className="form-group">

                <label htmlFor="minValue">Preço: </label>
                    <div className="d-flex align-items-center justify-content-between">
                        <S.InputValueFilter type="number" id="minValue"  name="minValue" placeholder="Valor Mín." onChange={handleInputChange} required /> -
                        <S.InputValueFilter type="number" id="maxValue"  name="maxValue" placeholder="Valor Máx." onChange={handleInputChange} required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Localidade:</label>
                    <S.InputDefaultFilter type="bairro" id="InputBairro" name="bairro" aria-describedby="bairroHelp" placeholder="Insira o Bairro" onChange={handleInputChange} required/>
                </div>

                <div className="form-group">
                <label htmlFor="moradia">Tipo de moradia</label>
                        <S.SelectInputFilter onChange={handleInputChange} required>
                        <option value="" hidden>
                        Clique para selecionar
                        </option>
                        <option value="1">Casa</option>
                        <option value="2">Apartamento</option>
                    </S.SelectInputFilter>
                </div>

                <div className="form-group">
                <label htmlFor="compartilhamento">Tipo de compartilhamento</label>
                        <S.SelectInputFilter onChange={handleInputChange} required>
                        <option value="" hidden>
                        Clique para selecionar
                        </option>
                        <option value="1">Quarto e residência</option>
                        <option value="2">Residência</option>
                    </S.SelectInputFilter>
                </div>

                <div className="col text-center">
                    <S.ButtonStyled primary type="submit">Filtrar</S.ButtonStyled>
                </div>
             
            </form>
            </S.FilterContainer>


            <S.ContainerImoveisGeral>
            {anuncios && anuncios.slice(currentPage * pageSize,(currentPage + 1) * pageSize).map((anuncio) => {
                return (
                    <S.ImovelContainer>
                    <S.ContainerImageInside>
                    <img className="roundedImg" src="https://picsum.photos/320/250"></img>
                    </S.ContainerImageInside>
                    <S.ContainerImovelInfos>
                        <S.ContainerImovelInside1 className="ml-3">
                            <p className="mr-3">{anuncio.moradiaTip}</p>
                            <S.DivSeparator></S.DivSeparator>
                            <p className="ml-3 mr-3 justify-content-center">
                            {anuncio.cidade}
                            </p>
                            <S.DivSeparator></S.DivSeparator>
                            <p className="ml-3 mr-3 justify-content-center">
                            {anuncio.bairro}
                            </p>
                            <S.DivSeparator></S.DivSeparator>
                            <p className="ml-3 justify-content-center">
                            {anuncio.rua}
                            </p>
                        </S.ContainerImovelInside1>


                        <S.ContainerImovelInside2>
                            <S.DivTextValue className="ml-3">
                                <S.TextValue>R$ {anuncio.valor}</S.TextValue>
                            </S.DivTextValue>
                            <p className="ml-3 mr-3">
                                {anuncio.informacoes}
                            </p>
                        </S.ContainerImovelInside2>

                        <S.ContainerImovelInside3>
                            <p className="ml-3 mr-3">
                                {anuncio.fornecedor}
                            </p>
                            <S.DivTextValue className="ml-3">
                                <S.TextValue>Zapeie aqui</S.TextValue>
                            </S.DivTextValue>
                        </S.ContainerImovelInside3>
                    </S.ContainerImovelInfos>
                </S.ImovelContainer>
                )
            })}

                                    {/* <Pagination  className="pagination justify-content-end mb-0" listClassName="justify-content-end mb-0">
                                        <PaginationItem
                                            disabled={currentPage <= 0}
                                        >
                                            <PaginationLink
                                                onClick={handlePreviousClick}
                                                previous
                                                href="#"
                                            />
                                        </PaginationItem>

                                        {[...Array(pageCount)].map(
                                            (page, i) => (
                                                <PaginationItem
                                                    active={i === currentPage}
                                                    key={i}
                                                >
                                                    <PaginationLink
                                                        onClick={(e) =>
                                                            handlePageClick(
                                                                e,
                                                                i
                                                            )
                                                        }
                                                        href="#"
                                                    >
                                                        {i + 1}
                                                    </PaginationLink>
                                                </PaginationItem>
                                            )
                                        )}

                                        <PaginationItem
                                            disabled={
                                                currentPage == pageCount - 1
                                            }
                                        >
                                            <PaginationLink
                                                onClick={handleNextClick}
                                                next
                                                href="#"
                                            />
                                        </PaginationItem>
                                    </Pagination> */}

                                    <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span class="sr-only " disabled={currentPage <= 0}  >Previous</span>
                                        </a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                        </li>
                                    </ul>
                                    </nav>
                
            </S.ContainerImoveisGeral>
            

        </S.FormContainerGeral>
    )


    
}



export default AnuncioTela