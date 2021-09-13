import styled from 'styled-components'
import * as R from 'reactstrap';

//Container geral da página que engloba tudo exceto footer e navbar
export const ContainerGeral = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
background-color: #e6e6e6;
position: relative;

  @media screen and (max-width:900px){
    flex-wrap:wrap;
    margin-top: 20px;
    width: 100%;
  }

  @media screen and (min-height:100%){
    height: 100vh;
  }
`

//Container que contem o filtro de anuncios
export const ContainerGeralInterno1 =styled.div`
  box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  width: 300px;
  margin: 10px auto;
  margin-left:40px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #6c757d;
  background-color: #fff;
  height: fit-content;
  position: absolute;

  @media screen and (max-width:820px){
    width: 320px;
    position: relative;
  }
`
//Container que contem os anuncios
export const ContainerGeralInterno2 = styled.div`
width: 100%;
margin: 0 30px;
margin-left: 350px;
padding: 0 20px;
display: flex;
flex-direction: column;

@media screen and (max-width:820px){
    margin-left: 0;
    width: 100%;
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

//Separador horizontal de divs customizado da tela de Anuncio
export const DivSeparatorAnuncioX = styled.div`
width: 100%;
height: 1px;
/* height: fit-content; */
background-color: #db7093;
margin: 0 auto;
`;

//Separador vertical de divs customizado da tela de Anuncio
export const DivSeparatorAnuncioY = styled.div`
width: 1px;
height: fit;
background-color: #db7093;
margin: 0 auto;
`;

//Input de valor customizado do filtro da tela de Anuncios
export const InputDefaultFormFilterValue = styled.input`
  padding: 0.5em;
  width: 45%;
  color: ${props => props.inputColor || "black"};
  background: #ededed ;
  border: 1px solid #6c757d;
  border-radius: 3px;
  transition: 0.5s;
  :focus{
        border: 1px solid #db7093;
        box-shadow: 0 0 0 0.25rem  rgba(219, 112, 147, 0.5);
        outline: none;
        background: white;
        color: palevioletred;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #6c757d;
  }
  :-ms-input-placeholder {
     color: #6c757d;
  }
`

//Input de texto customizado do filtro da tela de Anuncios
export const InputDefaultFormFilterText = styled.input`
  padding: 0.5rem;
  width: 100%;
  color: ${props => props.inputColor || "black"};
  background: #ededed ;
  border: 1px solid #6c757d;
  border-radius: 3px;
  transition: 0.5s;
  :focus{
        border: 1px solid #db7093;
        box-shadow: 0 0 0 0.25rem  rgba(219, 112, 147, 0.5);
        outline: none;
        background: white;
        color: palevioletred;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #6c757d;
  }
  :-ms-input-placeholder {
     color: #6c757d;
  }
`

//Input de select customizado do filtro da tela de Anuncios
export const InputSelectDefaultFormFilter = styled.select`
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
  appearance: none;
  :focus,:active,:hover{
    border: 1px solid #db7093;
        box-shadow: 0 0 0 0.25rem  rgba(219, 112, 147, 0.5);
        outline: none;
        background: white;
        color: palevioletred;
  }

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

//Botão estilo customizado do filtro da tela de anuncio
export const ButtonStyledFormFilter = styled.button`
  background: linear-gradient(to right, #DB7093, #E28DA9, #DB7093);
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #6c757d;
  border-radius: 3px;
  transition: 0.5s;
  :hover,:active,:focus{
        color: white;
        box-shadow: 0 0 0 0.25rem  rgba(219, 112, 147, 0.5);
        background: #ad5f79 ; 
        border-color: #6c757d;
        outline: none;
    }
`;

//container dos imoveis individualmente na tela de anuncio
export const ImovelContainer =styled.div`
  box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  /* flex-direction: column; */
  margin: 10px 20px;
  /* padding: 20px; */
  border-radius: 10px;
  border: 1px solid #6c757d;
  background-color: #fff;
  top: 100px;
  right: 5%;
  height: fit-content;
  
  @media screen and (max-width:820px){
    margin-top: 20px;
    width: 320px;
    flex-direction: column;
    
  }
`

// Sessão do anuncio responsável por mostrar a thumbnail
export const ContainerImageInside = styled.div`
display: flex;
justify-content: space-around;
width: fit-content;
height: 250px;
/* border: 0 0 30px 0 solid blue; */
`;

//Componente que faz as bordas da thumbnail ficarem arredondadas
export const RoundedImg = styled.img`
  border-radius: 9px 0 0 9px;
  border: 0 0 1px 0 solid #6c757d;

  @media screen and (max-width:820px){
    border-radius: 10px 10px 0 0;
  }
`;

//Sessão do anuncio responsável por mostrar a div de informações do imóvel
export const ContainerImovelInfos = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
max-height: 250px;
width: 100%;
`;

//Sessão do anuncio responsável por mostrar a primeira linha de informações do imovel
export const ContainerImovelInside1 = styled.div`
display: flex;
justify-content: space-between;
width: 1000px;
margin-top: 1%;
margin-left: 1%;
`;

//Sessão do anuncio responsável por mostrar a segunda linha de informações do imovel
export const ContainerImovelInside2 = styled.div`
display: flex;
align-items: center;
width: fit-content;
/* margin-top: 3%; */
`;

//Sessão do anuncio responsável por mostrar a terceira linha de informações do imovel
export const ContainerImovelInside3 = styled.div`
display: flex;
align-items: center;
/* width: fit-content; */
/* margin-top: 3%; */
`;

//Div onde é mostrado o valor do aluguél do imóvel
export const DivTextValue = styled.div`
width: auto;
margin-left: 2%;
background:   #482530;
align-items: center;
padding: 2px 10px 0px 10px;
border: 2px solid black;
border-radius: 5px;
`;

//Div onde é mostrado o valor do aluguél do imóvel
export const DivTextDescription = styled.div`
display: flex;
width: 100%;
align-items: center;

`;

//Label onde mostra o valor do imóvel
export const TextValue = styled.h2`
color: palevioletred;
border-radius: 50%;
width: max-content;
`;

//Botão estilo customizado do filtro da tela de anuncio
export const ButtonStyledFormFilterAcess = styled.button`
  background: linear-gradient(to right, #DB7093, #E28DA9, #DB7093);
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  margin-right: 20px;
  border: 1px solid #6c757d;
  border-radius: 3px;
  transition: 0.5s;
  :hover,:active,:focus{
        color: white;
        box-shadow: 0 0 0 0.25rem  rgba(219, 112, 147, 0.5);
        background: #ad5f79 ; 
        border-color: #6c757d;
        outline: none;
    }
`;




//Paginação da tela de anúncio
export const PaginationPink = styled(R.Pagination)`
  .page-item.active .page-link{
    background-color: #db7093;
    border-color: #6c757d;
    transition: 0.5s;
    :focus,:active,:hover{
        border: 1px solid #6c757d;
        box-shadow: 0 0 0 0.25rem  rgba(219, 112, 147, 0.5);
        outline: none;
        border-radius: 5px;
    }
  }
  .page-item.disabled .page-link{
    background-color: #db7093;
    border-color: #6c757d;
    box-shadow: 0 0 0 0.25rem  rgba(219, 112, 147, 0.5);
    transition: 0.5s;
    color: white;
    background-position: right;
  }
  .page-link{
    background-color: white;
    color: #6c757d;
    border-color: #6c757d;
    transition: 0.5s;
    :focus,:active,:hover{
        border: 1px solid #6c757d;
        box-shadow: 0 0 0 0.25rem  rgba(118, 117, 125, 0.5);
        outline: none;
        border-radius: 5px;
        background: #6c757d;
        color: white;
    }
  }
` 
