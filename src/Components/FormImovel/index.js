import React from 'react';
import {FormContainer, FormContainerGeral, FormIM} from './FormImovelStyle';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PostFormImov} from '../../Service/PostImovelForm'

const FormImovel = ()=>{

     const initialCadastroState = {
         cep: "",
         logradouro: "",
         numero: "",
         complemento:"",
         bairro:"",
         cidade:"",
         estado:""
      };

    const [input, setInput] = useState(initialCadastroState)
   

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
            setInput({ ...input, [name]: value });
    }
    
    const SendForm = (e) =>{
        e.preventDefault();
        PostFormImov(input);
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
                    
                        <div className="col text-center">
                            <button type="submit" className="btn btn-primary ">Próximo</button>
                        </div>
                    </form>
                </FormContainer>
            </FormContainerGeral>  
        </>
    )
}

export default FormImovel