import styled from 'styled-components'

export const FormContainer =styled.div`
  box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  width: 1050px;
  margin: 10px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #6c757d;

  @media screen and (max-width:820px){
    margin-top: 20px;
    width: 320px; 
  }
`

export const FormIM = styled.h1`
    text-align: center;
    font-size: 28px;
    @media screen and (max-width:820px){
   font-size: 25px;
  }
`

export const FormIM2 = styled.h1`
    text-align: center;
    font-size: 28px;
    @media screen and (max-width:820px){
   font-size: 25px;
  }
`

export const FormContainerGeral = styled.div`
display: flex;
flex-wrap:wrap;
background-color: #e6e6e6;

align-items: center;
  width: 100%;
  height: 100vh;
`

export const FormContainerFotoG = styled.div`
display: flex;
flex-wrap:wrap;
background-color: #e6e6e6;

align-items: center;
   width: 100%;
   height: 100vh;
`

export const FormContainerFoto = styled.div`
display: flex;
flex-wrap:wrap;
background-color: #e6e6e6;

align-items: center;
   width: 100%;
   height: 100vh;
`

export const DivSeparator = styled.div`
width: 100%;
height: 1px;
/* height: fit-content; */
background-color: #F2BE38;
margin: 20px 0 20px 0;
`;

export const InputFile = styled.input`
  padding: 0.5rem;
  width: 50%;
  height: 42px;
  color: white;
  background: #ededed ;
  border: 1px solid #6c757d;
  border-radius: 3px;
  transition: 0.5s;
  :focus{
        border: 1px solid #F2BE38;
        box-shadow: 0 0 0 0.25rem  rgba(242,190,56, 0.5);
        outline: none;
        background: white;
        color:  #F2BE38;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #6c757d;
  }
  :-ms-input-placeholder {
     color: #6c757d;
  }
`

export const ButtonAddPhoto = styled.button`
  background: linear-gradient(to right,  #795F1C, #B58E2A, #F2BE38);
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #6c757d;
  border-radius: 35px 3px 35px 3px;
  transition: 0.5s;
  :hover,:active,:focus{
        color: white;
        box-shadow: 0 0 0 0.25rem  rgba(181,142,42, 0.5);
        background: #B58E2A ; 
        border-color: #6c757d;
        outline: none;
    }
`;

export const ButtonConcluir = styled.button`
  background: linear-gradient(to right,  #F2BE38, #F2BE38, #F2BE38);
  color: white;
  font-size: 1em;
  margin: 1em;
  align-items: flex-end;
  padding: 0.25em 1em;
  border: 1px solid #6c757d;
  border-radius: 3px 3px 3px 35px;
  transition: 0.5s;
  :hover,:active,:focus{
        color: white;
        box-shadow: 0 0 0 0.25rem  rgba(242,190,56, 0.5);
        background: #F2BE38 ; 
        border-color: #6c757d;
        outline: none;
    }
`;