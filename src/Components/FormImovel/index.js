import React from 'react';
import {FormContainer, FormContainerGeral, FormIM} from './FormImovelStyle';
import { useState } from 'react';
import { PostFormImov} from '../../Service/PostImovelForm';
import {useHistory, Link} from 'react-router-dom'

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
            <FormContainerGeral> 
                <FormContainer>
                    <FormIM>Faça o seu Anúncio</FormIM>
                    <form onSubmit={SendForm}>

                        <div className="form-group">
                            <input type="number" className="form-control" id="cep"  name="cep" placeholder="Cep" onChange={handleInputChange} required />  
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" id="logradouro" name="logradouro" placeholder="Logradouro" onChange={handleInputChange} required/>                  
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" id="numero" name="numero" placeholder="Nº" onChange={handleInputChange} required/>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" id="complemento" name="complemento"  placeholder="Complemento" onChange={handleInputChange} required />        
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" id="bairro" name="bairro"  placeholder="bairro" onChange={handleInputChange} required />        
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" name="cidade" id="cidade" placeholder="Cidade" onChange={handleInputChange} required/>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" name="estado" id="estado" placeholder="UF" onChange={handleInputChange} required/>
                        </div>

                        <div  className="form-container">
                            <label htmlFor="tipo_imovel">Tipo de Residência</label>
                            <select id="tipo_imovel" name="tipo_imovel" onChange={handleInputChange}>
                                <option value={null}>Selecione uma opção abaixo</option>
                                <option value="casa">Casa</option>
                                <option value="apartamento">Apartamento</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="metragem_imovel">Metragem da Residencia</label>
                            <input type="number" min="0" className="form-control" id="metragem_imovel" name="metragem_imovel" placeholder="M²" onChange={handleInputChange} />
                        </div>

                        <div>
                            <label htmlFor="qtd_num_pessoas">Quantidade de Pessoas na Residencia</label>
                            <input type="number" min="0" className="form-control" id="qtd_num_pessoas" name="qtd_num_pessoas" placeholder="Quantidade de Pessoas na Residencia" onChange={handleInputChange} />
                        </div>

                        <div>
                            <label htmlFor="qtd_banheiro">Quantidade de Banheiro Social</label>
                            <input type="number" min="0" className="form-control num" id="qtd_banheiro" name="qtd_banheiro" placeholder="Quantidade de Banheiro Social" onChange={handleInputChange} />
                        </div>
                    
                        <div className="col text-center">
                        < button  type = "submit"  className = "btn btn-primary"> Próximo </button>
                        </div>
                    </form>
                </FormContainer>
            </FormContainerGeral>  
        </>
    )
}

export default FormImovel