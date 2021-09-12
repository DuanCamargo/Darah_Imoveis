import styled from 'styled-components'

//Container geral da página que engloba tudo exceto footer e navbar
export const ContainerGeral = styled.div`
display: flex;
flex-wrap:wrap;
background-color: #e6e6e6;

align-items: center;
  width: 100%;
  height: 100vh;
`

//Container que contem o cadastro de anuncio
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

//Separador vertical de divs customizado horizontal da tela de Cadastro de Imóveis
export const DivSeparatorFormImovelY = styled.div`
width: 100%;
height: 1px;
background-color: #F2BE38;
margin: 20px 0 20px 0;
`

//Input de texto customizado da tela de Cadastro de Imóveis
export const InputDefaultFormImovel = styled.input`
  padding: 0.5rem;
  width: 100%;
  height: 42px;
  color: ${props => props.inputColor || "black"};
  background: #ededed ;
  border: 1px solid #6c757d;
  border-radius: 3px;
  transition: 0.5s;
  :focus{
        border: 1px solid #F2BE38;
        box-shadow: 0 0 0 0.25rem  rgba(242,190,56, 0.5);
        outline: none;
        background: white;
        color: #F2BE38;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #6c757d;
  }
  :-ms-input-placeholder {
     color: #6c757d;
  }
`

//Input de Select customizado da tela de Cadastro de Imóveis
export const InputSelectDefaultFormImovel = styled.select`
  width: 100%;
  height: 42px;
  background: #ededed;
  color: ${props => props.inputColor || "black"};
  padding: 0.5rem;
  font-size: 15px;
  border: 1px solid #6c757d;
  border-radius: 3px;
  color: #6c757d;
  transition: 0.5s;
  :focus,:active,:hover{
    border: 1px solid #F2BE38;
        box-shadow: 0 0 0 0.25rem  rgba(242,190,56, 0.5);
        outline: none;
        background: white;
        color: #daa520;
  }
  appearance: none;

  option {
    color: black;
    background: #ededed;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }

  :-ms-expand {
    display: none;
  }
`;

//Botão customizado da tela de Cadastro Imovel com objetivo de retroceder a tela
export const ButtonStyledFormImovelPrevious = styled.button`
  background: linear-gradient(to right,  #F2BE38, #ffd56a, #F2BE38);
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #6c757d;
  border-radius: 15px 3px 3px 15px;
  transition: 0.5s;
  :hover,:active,:focus{
        color: white;
        box-shadow: 0 0 0 0.25rem  rgba(242,190,56, 0.5);
        background: #B58E2A ; 
        border-color: #6c757d;
        outline: none;
    }
`;

//Botão customizado da tela de Cadastro Imovel com objetivo de avançar a tela
export const ButtonStyledFormImovelNext = styled.button`
  background: linear-gradient(to right,  #F2BE38, #ffd56a, #F2BE38);
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #6c757d;
  border-radius: 3px 15px 15px 3px;
  transition: 0.5s;
  :hover,:active,:focus{
        color: white;
        box-shadow: 0 0 0 0.25rem  rgba(242,190,56, 0.5);
        background: #B58E2A ; 
        border-color: #6c757d;
        outline: none;
    }
`;

