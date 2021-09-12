import React from "react";
import { GetForm} from '../../Service/GetLoginForm.js'
import { UsuarioLogadoContext } from "../../Context/UsuarioLogado";
import { useState } from 'react';
import { useContext } from "react";
import { RiUser6Fill } from "react-icons/ri";
import {AiOutlineCloseCircle} from 'react-icons/ai'

import * as R from "./Card";
import { Label } from "reactstrap";


function Login2() {

  const initialLoginState = {
    email: "",
    senha:""
  };

  const [input, setInput] = useState(initialLoginState)
  const [usuarioLogado, setUsuarioLogado] = useContext(UsuarioLogadoContext)

  const [erroLog, setErroLog] = useState(false)

  const handleInputChange = (event) =>{
    const {name, value} = event.target;
    setInput({ ...input, [name]: value });
  }

  const loginSenha = (event) =>{
    if(input.email != null && input.senha !=null){
      console.log("Eles não são NULOS")
      event.preventDefault();

      GetForm(input.email, input.senha).then(response => {
        const data = {
          id: "",
          nome: "",
          sobrenome: "",
          email: "",
          senha:"",
          whatsapp:""
        };
        data.nome = response.nome;
        data.sobrenome = response.sobrenome;
        data.whatsapp = response.whatsapp;
        data.email = response.email;
        data.senha = response.senha;
        data.id = response.id_usuario;

        setUsuarioLogado(data)
        console.log(usuarioLogado)
      }).catch(e =>{
          setErroLog(true)
      })
  }
}
  return (
    <div className="App">
      <form onSubmit={loginSenha}>
      <R.FormContainerGeral>
      <R.FormContainer>
        <R.FormIM><RiUser6Fill/> Login</R.FormIM>
        <R.FormIM><R.DivSeparator/></R.FormIM>
        
        <div>
          <Label>Usuário:</Label>
          <R.InputDefaultFilter type="text" placeholder="Usuário" name="user" onChange={handleInputChange} required></R.InputDefaultFilter>
        </div>
        <div className="mt-4">
          <Label>Senha:</Label>
          <R.InputDefaultFilter type="password" placeholder="Senha" name="password" onChange={handleInputChange} required></R.InputDefaultFilter>
        </div>
        <div>
        { erroLog ? 
           <R.Perro> <AiOutlineCloseCircle className="mr-1"/>Dados incorretos!</R.Perro>:  null}
           </div>

        <div className="mt-4 d-flex justify-content-center">
          <R.ButtonStyledForget> Esqueci a senha </R.ButtonStyledForget>
          <R.ButtonStyledCadastrar> Cadastrar </R.ButtonStyledCadastrar>
          <R.ButtonStyledLogin type="submit"> Login </R.ButtonStyledLogin>
         
        </div>
        
      </R.FormContainer>
      </R.FormContainerGeral>
      </form>
    </div>
  );
}


export default Login2;