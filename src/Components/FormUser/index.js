import React from 'react'
import {FormContainer, FormH1} from './FormStyle'
import { useState } from 'react'
import { PostForm } from '../../Service/PostUsuarioForm'

const FormUser = ({isOpen, toggle})=>{

     const initialCadastroState = {
         nome: "",
         sobrenome: "",
         email: "",
         senha:"",
         whatsapp:""
      };

    const [input, setInput] = useState(initialCadastroState)
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
        
    <FormH1>Cadastro de Usuário</FormH1>
        <FormContainer>
           <form onSubmit={SendForm} >
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" className="form-control" id="name"  name="nome" placeholder="Insira o seu nome" onChange={handleInputChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <input type="text" className="form-control" id="sobrenome" name="sobrenome" placeholder="Insira o seu sobrenome" onChange={handleInputChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Insira o seu email" onChange={handleInputChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="telefone">Whatsapp</label>
                    <input type="number" className="form-control" id="whatsapp" name="whatsapp"  placeholder="Insira o seu wahtsapp" onChange={handleInputChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" className="form-control" name="senha" id="senha" placeholder="Insira a sua senha" onChange={handleInputChange} required/>
                </div>

                <button type="submit" className="btn btn-primary ">Cadastrar</button>
            </form>
            
        </FormContainer>
        </>
    )
}
export default FormUser