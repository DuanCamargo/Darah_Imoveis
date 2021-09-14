import React from 'react'
import {RiAccountCircleFill} from 'react-icons/ri'
import { useState } from 'react'
import { PostForm } from '../../Service/PostUsuarioForm'
import loginSenha from '../FormLogin/FormLogin'
import * as R from '../FormUser/FormStyle'

import '../../../src/App.css'

const FormUser = ({img, alt})=>{

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
        PostForm(input).then(response =>{
            console.log("Cadastrado")
        })
    }

    return (
            <R.ContainerGeral>
                <R.ContainerGeralInterno1>
                    <R.HeaderContainerFont> <RiAccountCircleFill/> Cadastro</R.HeaderContainerFont>
                    <R.HeaderContainerFont> <R.DivSeparatorFormCadUserX/></R.HeaderContainerFont>
                    <form onSubmit={SendForm} >
                        <div className="form-group">
                            <label htmlFor="name">Nome:</label>
                            <R.InputDefaultFormCadUser autoComplete="off" type="text" className="form-control" id="name" placeholder="Insira o seu nome"  name="nome" /* placeholder="Insira o seu nome" */ onChange={handleInputChange} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="sobrenome">Sobrenome:</label>
                            <R.InputDefaultFormCadUser autoComplete="off" type="text" className="form-control" id="sobrenome" name="sobrenome" placeholder="Insira o seu sobrenome" onChange={handleInputChange} required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email:</label>
                            <R.InputDefaultFormCadUser autoComplete="off" type="email"  className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Insira o seu email" onChange={handleInputChange} required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="telefone">Telefone</label>
                            <R.InputDefaultFormCadUser autoComplete="off" type="number" className="form-control" id="whatsapp" name="whatsapp"  placeholder="Insira o seu telefone" onChange={handleInputChange} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="senha">Senha:</label>
                            <R.InputDefaultFormCadUser autoComplete="off" type="password" className="form-control" name="senha" id="senha" placeholder="Insira a sua senha" onChange={handleInputChange} required/>
                        </div>
                        
                        <div className="col text-center">
                            <R.ButtonStyledCadUser autoComplete="off" type="submit" className="btn btn-primary ">Cadastrar</R.ButtonStyledCadUser>
                        </div>
                    </form>
                
                </R.ContainerGeralInterno1>

                <R.ContainerGeralInterno2>
                    <R.HeaderContainerFont>Cadastre-se no nosso banco de dados</R.HeaderContainerFont>
                    <R.DivImgCadUser>
                                <R.ImgCadUserText>Realize o seu cadastro para ter total
                                    acesso da aplicação web, além de possibilitar o uso 
                                    das suas ferramentas
                                </R.ImgCadUserText>
                    </R.DivImgCadUser>
                    
                    <R.ImgCadUser src={img} alt={alt} ></R.ImgCadUser>
                </R.ContainerGeralInterno2>
            </R.ContainerGeral>  
    )
}

export default FormUser