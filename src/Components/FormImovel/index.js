import React from 'react'
import {FormContainer} from './FormStyle'
import {RiAccountCircleFill} from 'react-icons/ri'
import { useState } from 'react'
import { PostForm } from '../../Service/PostUsuarioForm'



// import{ useHistory} from 'react-router-dom


const FormImovel = ()=>{

     const initialCadastroState = {
         cep: "",
         logradouro: "",
         numero: "",
         complemento:"",
         cidade:"",
         estado:""
      };

    const [input, setInput] = useState(initialAnuncioState)
    // const history = useHistory();

    const handleInputChange = (event) =>{
        
        const {name, value} = event.target;
            setInput({ ...input, [name]: value });
            
    }
    
    const SendForm = (e) =>{
        e.preventDefault();
        PostForm(input);
        
    }
   
    

    return (
        <>
           
           
        <FormContainerGeral>
        
       
       <FormContainer>
           
       <Form> <RiAccountCircleFill/> Faça o seu Anúncio</Form>
           <form onSubmit={SendForm} >
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

export default FormUser