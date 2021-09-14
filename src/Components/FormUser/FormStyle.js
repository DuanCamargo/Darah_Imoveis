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

//Container que contem o cadastro de usuário
export const ContainerGeralInterno1 =styled.div`
  box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  width: 400px;
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

//Container que contem a imagem lateral do cadastro de usuário
export const ContainerGeralInterno2 =styled.div`
  width: 450px;
  margin: 0 auto;

  @media screen and (max-width:820px){
    width: 400px;
    margin-top: 30px;
    padding: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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

//Separador horizontal de divs customizado horizontal da tela de Cadastro de Usuário
export const DivSeparatorFormCadUserX = styled.div`
width: 100%;
height: 1px;
background-color: #70C8DB;
margin: 20px 0 20px 0;
`;

//Campo responsavel por renderizar a imagem
export const ImgCadUser = styled.img`

  width: 100%;
  height: 300px;

  @media screen and (max-width:820px){
  
    height: 40%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

  }
`

//Div onde fica o texto acima da imagem lateral no Cadastro de Usuário
export const DivImgCadUser = styled.div`
  width: 100%;

  @media screen and (max-width:820px){
    margin-top: 20px;
  
  }
`

//Label onde fica o texto acima da imagem lateral do Cadastro de Usuário
export const ImgCadUserText = styled.p`
  width:100%;
  font-size: 15px;
  text-align: justify;

  @media screen and (max-width:820px){
    font-size: 13px;
  
  }

`

//Input de texto customizado da tela de Cadastro de Imóveis
export const InputDefaultFormCadUser = styled.input`
  padding: 0.5rem;
  width: 100%;
  height: 42px  ;
  color: ${props => props.inputColor || "black"};
  background: #ededed ;
  border: 1px solid #6c757d;
  border-radius: 3px;
  transition: 0.5s;
  :focus{
        border: 1px solid #70C8DB;
        box-shadow: 0 0 0 0.25rem  rgba(112,200,219, 0.5);
        outline: none;
        background: white;
        color: #70C8DB;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #6c757d;
  }
  :-ms-input-placeholder {
     color: #6c757d;
  }
`

//Botão estilo customizado da tela de Cadastro Imovel
export const ButtonStyledCadUser = styled.button`
  background: linear-gradient(to right, #70C8DB, #93d6e4, #70C8DB);
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #6c757d;
  border-radius: 3px;
  transition: 0.5s;
  :hover,:active,:focus{
        color: white;
        box-shadow: 0 0 0 0.25rem  rgba(112,200,219, 0.5);
        background: #5496A4 ; 
        border-color: #6c757d;
        outline: none;
    }
`;