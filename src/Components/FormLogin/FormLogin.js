import React from "react";
import { GetForm} from '../../Service/GetLoginForm.js'
import { UsuarioLogadoContext } from "../../Context/UsuarioLogado";
import { useState} from 'react';
import { useHistory } from 'react-router'
import { useContext } from "react";
import { RiUser6Fill } from "react-icons/ri";
import {AiOutlineCloseCircle} from 'react-icons/ai'

import * as R from "./Card";
import { Alert, Label } from "reactstrap";


function Login2() {
  let history = useHistory()
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

        data.id = response.id_usuario
        data.nome = response.nome
        data.sobrenome = response.sobrenome
        data.email = response.email
        data.senha = response.senha
        data.whatsapp = response.whatsapp
        setUsuarioLogado(data)
        console.log(usuarioLogado)

        console.log("Data: ")
        console.log(data)
        console.log("response id usuario: ")
        console.log(response.id_usuario)

        history.push({
          pathname: "/",
        })
<<<<<<< HEAD
      }).catch(e =>{
          setErroLog(true)
=======
      }).catch(e => {
        alert("Login ou Senha errado! ")
        // setInput(input.email = "", input.senha = "")
>>>>>>> a2892f2483a746fd8d463028df4761c329447ff5
      })
  }
}
  return (
    <div className="App">
      <form onSubmit={loginSenha}>
<<<<<<< HEAD
      <R.FormContainerGeral>
      <R.FormContainer>
        <R.FormIM><RiUser6Fill/> Login</R.FormIM>
        <R.FormIM><R.DivSeparator/></R.FormIM>
        
        <div>
          <Label>Email:</Label>
          <R.InputDefaultFilter type="text" placeholder="Usuário" name="email" onChange={handleInputChange} required></R.InputDefaultFilter>
        </div>
        <div className="mt-4">
          <Label>Senha:</Label>
          <R.InputDefaultFilter type="password" placeholder="Senha" name="senha" onChange={handleInputChange} required></R.InputDefaultFilter>
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
=======
      <R.ContainerGeral>
        <R.ContainerGeralInterno1>
          <R.HeaderContainerFont><RiUser6Fill/> Login</R.HeaderContainerFont>
          <R.HeaderContainerFont><R.DivSeparatorLoginX/></R.HeaderContainerFont>
          
          <div>
            <Label>Email:</Label>
            <R.InputDefaultLogin type="text" placeholder="Usuário" name="email" onChange={handleInputChange} required></R.InputDefaultLogin>
          </div>
          <div className="mt-4">
            <Label>Senha:</Label>
            <R.InputDefaultLogin type="password" placeholder="Senha" name="senha" onChange={handleInputChange} required></R.InputDefaultLogin>
          </div>

          <div className="mt-4 d-flex justify-content-center">
            <R.ButtonStyledLoginForget> Esqueci a senha </R.ButtonStyledLoginForget>
            <R.ButtonStyledLoginCadastrar> Cadastrar </R.ButtonStyledLoginCadastrar>
            <R.ButtonStyledLoginLogar type="submit"> Login </R.ButtonStyledLoginLogar>
          </div>
          
        </R.ContainerGeralInterno1>
      </R.ContainerGeral>
>>>>>>> a2892f2483a746fd8d463028df4761c329447ff5
      </form>
    </div>
  );
}


export default Login2;