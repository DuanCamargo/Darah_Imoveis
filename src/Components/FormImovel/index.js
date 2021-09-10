import React from 'react';
import * as R from './FormImovelStyle';
import { useState } from 'react';
import { PostFormImov} from '../../Service/PostImovelForm';
import {useHistory, Link} from 'react-router-dom'
import { RiCommunityLine } from "react-icons/ri";

const FormImovel = ()=>{

    const init = {
        // id_imovel: "",
        cep: "",
        logradouro: "",
        numero: "",
        complemento:"",
        bairro:"",
        cidade:"",
        estado:"",
        tipo_imovel: "",
        metragem_imovel: "",
        qtd_num_pessoas: "",
        qtd_banheiro: "",
    };

    const [input, setInput] = useState(init)

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
            setInput({ ...input, [name]: value });
    }

    console.log(input)
    let history = useHistory()
    
    const SendForm = (e) =>{
        e.preventDefault();
        PostFormImov(input).then(id_imovel => {
            
            console.log("id_imovel = "+id_imovel)
            history.push({
                pathname: "/CadQuarto", 
                state: {id_imovel},
            })
        })
    }

    return (
        <>
            <R.FormContainerGeral> 
                <R.FormContainer>
                    <R.FormIM> <RiCommunityLine/> Faça o seu Anúncio</R.FormIM>
                    <R.DivSeparator/>
                    <R.FormIM> Etapa 1</R.FormIM>
                    <form onSubmit={SendForm}>

                        <div className="form-group mt-4">
                            <R.InputDefaultFilter type="number" autoComplete="off" className="form-control" id="cep"  name="cep" placeholder="CEP" onChange={handleInputChange} required />  
                        </div>

                        <div className="form-group">
                            <R.InputDefaultFilter type="text" autoComplete="off" className="form-control" id="logradouro" name="logradouro" placeholder="Logradouro" onChange={handleInputChange} required/>                  
                        </div>

                        <div className="form-group">
                            <R.InputDefaultFilter type="text" autoComplete="off" className="form-control" id="numero" name="numero" placeholder="Nº" onChange={handleInputChange} required/>
                        </div>

                        <div className="form-group">
                            <R.InputDefaultFilter type="text" autoComplete="off" className="form-control" id="complemento" name="complemento"  placeholder="Complemento" onChange={handleInputChange} required />        
                        </div>

                        <div className="form-group">
                            <R.InputDefaultFilter type="text" autoComplete="off" className="form-control" id="bairro" name="bairro"  placeholder="Bairro" onChange={handleInputChange} required />        
                        </div>

                        <div className="form-group">
                            <R.InputDefaultFilter type="text" autoComplete="off" className="form-control" name="cidade" id="cidade" placeholder="Cidade" onChange={handleInputChange} required/>
                        </div>

                        <div className="form-group">
                            <R.InputDefaultFilter type="text" autoComplete="off" className="form-control" name="estado" id="estado" placeholder="UF" onChange={handleInputChange} required/>
                        </div>

                        <R.DivSeparator/>
                        <div className="form-container">
                            <label htmlFor="tipo_imovel">Tipo de Residência:</label>
                            <R.SelectInputFilter id="tipo_imovel" name="tipo_imovel" onChange={handleInputChange}>
                                <option value={null}>Selecione uma opção abaixo</option>
                                <option value="casa">Casa</option>
                                <option value="apartamento">Apartamento</option>
                            </R.SelectInputFilter>
                        </div>

                        <div className="mt-3">
                            <label htmlFor="metragem_imovel">Metragem da Residencia:</label>
                            <R.InputDefaultFilter autoComplete="off" type="number" min="0" className="form-control" id="metragem_imovel" name="metragem_imovel" placeholder="M²" onChange={handleInputChange} />
                        </div>

                        <div className="mt-3">
                            <label htmlFor="qtd_num_pessoas">Quantidade de Pessoas na Residencia:</label>
                            <R.InputDefaultFilter autoComplete="off" type="number" min="0" className="form-control" id="qtd_num_pessoas" name="qtd_num_pessoas" placeholder="Quantidade de Pessoas na Residencia" onChange={handleInputChange} />
                        </div>

                        <div className="mt-3">
                            <label htmlFor="qtd_banheiro">Quantidade de Banheiro Social:</label>
                            <R.InputDefaultFilter autoComplete="off" type="number" min="0" className="form-control num" id="qtd_banheiro" name="qtd_banheiro" placeholder="Quantidade de Banheiro Social" onChange={handleInputChange} />
                        </div>
                    
                        <div className="col text-center mt-3">
                        <R.ButtonStyled  type = "submit"  className = "btn btn-primary"> Próximo </R.ButtonStyled>
                        </div>
                    </form>
                </R.FormContainer>
            </R.FormContainerGeral>  
        </>
    )
}

export default FormImovel