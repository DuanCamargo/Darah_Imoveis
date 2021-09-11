import React, { useEffect } from 'react'
import * as S from './SidebarFilterStyle.js'
import { useState } from 'react'
import Anuncios from '../../Service/AnuncioService'
import * as R from 'reactstrap';
import {RiFilter2Line} from 'react-icons/ri'

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
        <S.FormContainerGeral>

            
            
            <S.FilterContainer>
               <S.FormH1> <RiFilter2Line/> Filtrar</S.FormH1>
               <S.FormH1> <S.DivSeparator/></S.FormH1>
            <form onSubmit={SendForm} >

            <div className="form-group mt-4">

                <label htmlFor="minValue">Preço: </label>
                    <div className="d-flex align-items-center justify-content-between">
                        <S.InputValueFilter autoComplete="off" type="number" id="minValue"  name="minValue" placeholder="Valor Mín." onChange={handleInputChange} required /> -
                        <S.InputValueFilter autoComplete="off" type="number" id="maxValue"  name="maxValue" placeholder="Valor Máx." onChange={handleInputChange} required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Localidade:</label>
                    <S.InputDefaultFilter autoComplete="off" type="bairro" id="InputBairro" name="bairro" aria-describedby="bairroHelp" placeholder="Insira o Bairro" onChange={handleInputChange} required/>
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
            <S.PaginationPink
				className='pagination justify-content-end ml-5 align-bottom paginacao'
				listClassName='justify-content-end mb-0'>
					<R.PaginationItem disabled={currentPage <= 0}  >
						<R.PaginationLink
						onClick={handlePreviousClick}
						first
						href='#'
						/>
					</R.PaginationItem>

										{[...Array(pageCount)].map((page, i) => (
											<R.PaginationItem active={i === currentPage} key={i}>
												<R.PaginationLink
													onClick={(e) => handlePageClick(e, i)}
													href='#'
												>
													{i + 1}
												</R.PaginationLink>
											</R.PaginationItem>
										))}

					<R.PaginationItem disabled={currentPage === pageCount -1}>
							<R.PaginationLink
								onClick={handleNextClick}
								last
								href='#'
							/>
                            
					</R.PaginationItem>
			</S.PaginationPink>
            {anuncios && anuncios.slice(currentPage * pageSize,(currentPage + 1) * pageSize).map((anuncio) => {
                return (
                <S.ImovelContainer key={anuncio.id}>
                    <S.ContainerImageInside>
                        <S.RoundedImg src="https://picsum.photos/320/250"></S.RoundedImg>
                    </S.ContainerImageInside>


                    <S.ContainerImovelInfos>
                        <S.ContainerImovelInside1 className="ml-3">
                            <p className="mr-3">{anuncio.moradiaTip}</p>
                            <S.DivSeparatorAnuncio></S.DivSeparatorAnuncio>
                            <p className="ml-3 mr-3 justify-content-center">
                            {anuncio.cidade}
                            </p>
                            <S.DivSeparatorAnuncio></S.DivSeparatorAnuncio>
                            <p className="ml-3 mr-3 justify-content-center">
                            {anuncio.bairro}
                            </p>
                            <S.DivSeparatorAnuncio></S.DivSeparatorAnuncio>
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

            <S.PaginationPink
				className='pagination justify-content-end ml-5 align-bottom paginacao'
				listClassName='justify-content-end mb-0'>
					<R.PaginationItem disabled={currentPage <= 0}  >
						<R.PaginationLink
						onClick={handlePreviousClick}
						first
						href='#'
						/>
					</R.PaginationItem>

										{[...Array(pageCount)].map((page, i) => (
											<R.PaginationItem active={i === currentPage} key={i}>
												<R.PaginationLink
													onClick={(e) => handlePageClick(e, i)}
													href='#'
												>
													{i + 1}
												</R.PaginationLink>
											</R.PaginationItem>
										))}

					<R.PaginationItem disabled={currentPage === pageCount -1}>
							<R.PaginationLink
								onClick={handleNextClick}
								last
								href='#'
							/>
                            
					</R.PaginationItem>
			</S.PaginationPink>

            </S.ContainerImoveisGeral>
    
        </S.FormContainerGeral>
    )


    
}



export default AnuncioTela