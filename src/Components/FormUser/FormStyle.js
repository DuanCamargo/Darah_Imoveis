import styled from 'styled-components'

export const FormContainer =styled.div`
  box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  width: 350px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #6c757d;
  
  @media screen and (max-width:820px){
    margin-top: 20px;
    width: 320px;
   
    
  }
`

export const FormH1 = styled.h1`
    text-align: center;
    font-size: 34px;
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

export const DivSeparator = styled.div`
width: 100%;
height: 1px;
/* height: fit-content; */
background-color: #70C8DB;
margin: 20px 0 20px 0;
`;

export const ContainerImg = styled.div`
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

export const Img = styled.img`

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

export const Pdiv = styled.div`
  width: 100%;

  @media screen and (max-width:820px){
    margin-top: 20px;
  
  }
`

export const Imgh1 = styled.p`
  width:100%;
  font-size: 15px;
  text-align: justify;

  @media screen and (max-width:820px){
    font-size: 13px;
  
  }

`

export const InputDefaultFilter = styled.input`
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

export const ButtonStyled = styled.button`
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