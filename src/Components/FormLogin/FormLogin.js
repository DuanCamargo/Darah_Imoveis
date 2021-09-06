import React from "react";
import { GetForm, banco } from '../../Service/GetLoginForm.js'
import { UsuarioLogadoContext } from "../../Context/UsuarioLogado";
import { useState } from 'react';
import { useContext } from "react";

import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardButton,
  CardLink
} from "./Card";


function Login2() {

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
      console.log("Eles não são NULOS")
      event.preventDefault();

      var x = GetForm(input.email, input.senha).then(response => {
        console.log(response.nome)
      })

      console.log(x)
  }
}
  return (
    <div className="App">
      <form onSubmit={loginSenha}>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Sign in</CardHeading>
        </CardHeader>

        <CardBody>

          <CardFieldset>
            <CardInput placeholder="E-mail" type="text" name="email" onChange={handleInputChange} required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="Senha" type="senha" name="senha" onChange={handleInputChange} required />
            <CardIcon className="fa fa-eye" eye small />
          </CardFieldset>

         

          <CardFieldset>
            <CardButton type="submit">Log in</CardButton>
          </CardFieldset>

          <CardFieldset>
            <CardLink>Ainda não possuo cadastro</CardLink>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
      </form>
    </div>
  );
}


export default Login2;