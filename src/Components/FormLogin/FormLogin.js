import React from "react";
import { GetForm} from '../../Service/GetLoginForm.js'
import { UsuarioLogadoContext } from "../../Context/UsuarioLogado";
import { useState} from 'react';
import { useHistory } from 'react-router'
import { useContext } from "react";
import { RiUser6Fill } from "react-icons/ri";

import * as R from "./Card";
import { Label } from "reactstrap";


function Login2() {
  let history = useHistory()
  const initialLoginState = {
    email: "",
    senha:""
  };

  const [input, setInput] = useState(initialLoginState)
  const [usuarioLogado, setUsuarioLogado] = useContext(UsuarioLogadoContext)

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

        history.push({
          pathname: "/",
        })
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
          <Label>Email:</Label>
          <R.InputDefaultFilter type="text" placeholder="Usuário" name="email" onChange={handleInputChange} required></R.InputDefaultFilter>
        </div>
        <div className="mt-4">
          <Label>Senha:</Label>
          <R.InputDefaultFilter type="password" placeholder="Senha" name="senha" onChange={handleInputChange} required></R.InputDefaultFilter>
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