import {React, useState} from "react";
import { GetForm } from '../../Service/GetLoginForm.js'


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

  const handleInputChange = (event) =>{
    const {name, value} = event.target;
    setInput({ ...input, [name]: value });
  }

  console.log(input);

  const loginSenha = () =>{

    GetForm(input.email, input.senha)

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