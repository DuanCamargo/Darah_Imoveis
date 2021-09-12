import styled, { css } from "styled-components";

//Container geral da página que engloba tudo exceto footer e navbar
export const ContainerGeral = styled.div`
display: flex;
flex-wrap:wrap;
background-color: #e6e6e6;

align-items: center;
  width: 100%;
  height: 100vh;
`

//Container que contem o login
export const ContainerGeralInterno1 =styled.div`
  box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  width: 500px;
  margin: 40px auto;
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #6c757d;

  @media screen and (max-width:820px){
    margin-top: 20px;
    width: 320px;
  }
`

//Componente para montar o header dos containers
export const HeaderContainerFont = styled.h1`
    text-align: center;
    font-size: 28px;
    @media screen and (max-width:820px){
   font-size: 25px;
  }
`

//Separador horizontal de divs customizado horizontal da tela de Login
export const DivSeparatorLoginX = styled.div`
width: 100%;
height: 1px;
background-color: #38F2BE;
margin: 20px 0 20px 0;
`;

//Input de texto customizado da tela de Cadastro de Imóveis
export const InputDefaultLogin = styled.input`
  padding: 0.5rem;
  width: 100%;
  height: 42px;
  color: ${props => props.inputColor || "black"};
  background: #ededed ;
  border: 1px solid #6c757d;
  border-radius: 3px;
  transition: 0.5s;
  :focus{
        border: 1px solid #38F2BE;
        box-shadow: 0 0 0 0.25rem  rgba(56,242,190, 0.5);
        outline: none;
        background: white;
        color: #38F2BE;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #6c757d;
  }
  :-ms-input-placeholder {
     color: #6c757d;
  }
`

//Botão estilo customizado da tela de Login usado para Logar
export const ButtonStyledLoginLogar = styled.button`
  background: linear-gradient(to right,  #38F2BE, #5eeac3, #38F2BE);
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #6c757d;
  border-radius: 3px 15px 15px 3px;
  transition: 0.5s;
  :hover,:active,:focus{
        color: white;
        box-shadow: 0 0 0 0.25rem  rgba(35,195,150, 0.5);
        background: #23C396 ; 
        border-color: #6c757d;
        outline: none;
    }
`;

//Botão estilo customizado da tela de Login usado para cadastrar
export const ButtonStyledLoginCadastrar = styled.button`
  background: linear-gradient(to right,  #38F2BE, #5eeac3, #38F2BE);
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #6c757d;
  border-radius: 3px 3px 3px 3px;
  transition: 0.5s;
  :hover,:active,:focus{
        color: white;
        box-shadow: 0 0 0 0.25rem  rgba(35,195,150, 0.5);
        background: #23C396 ; 
        border-color: #6c757d;
        outline: none;
    }
`;

//Botão estilo customizado da tela de Login usado para recuperar senha
export const ButtonStyledLoginForget = styled.button`
  background: linear-gradient(to right,  #38F2BE, #5eeac3, #38F2BE);
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #6c757d;
  border-radius: 15px 3px 3px 15px;
  transition: 0.5s;
  :hover,:active,:focus{
        color: white;
        box-shadow: 0 0 0 0.25rem  rgba(35,195,150, 0.5);
        background: #23C396 ; 
        border-color: #6c757d;
        outline: none;
    }
`;