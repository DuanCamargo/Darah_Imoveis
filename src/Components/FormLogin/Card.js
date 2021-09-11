import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const CardIcon = styled.span`
  color: #666;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;

  &:hover {
    opacity: .95;
  }

  ${props =>
    props.big &&
    css`
      font-size: 26px;
    `}

  ${props =>
    props.eye &&
    css`
      position: absolute;
      top: 8px;
      right: 0;
    `}

  ${props =>
    props.small &&
    css`
      font-size: 14px;
    `}
`;

export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;

export const CardOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`;

export const CardOptionsItem = styled.li`
  &:nth-of-type(n + 2) {
    margin-left: 16px;
  }
`;

export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;

export const FormContainerGeral = styled.div`
display: flex;
flex-wrap:wrap;
background-color: #e6e6e6;

align-items: center;
  width: 100%;
  height: 100vh;
 
`

export const FormContainer =styled.div`
  box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  width: 500px;
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

export const DivSeparator = styled.div`
width: 100%;
height: 1px;
/* height: fit-content; */
background-color: #38F2BE;
margin: 20px 0 20px 0;
`;

export const FormIM = styled.h1`
    text-align: center;
    font-size: 28px;
    @media screen and (max-width:820px){
   font-size: 25px;
  }
`

export const InputDefaultFilter = styled.input`
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

export const ButtonStyledLogin = styled.button`
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
export const ButtonStyledCadastrar = styled.button`
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
export const ButtonStyledForget = styled.button`
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