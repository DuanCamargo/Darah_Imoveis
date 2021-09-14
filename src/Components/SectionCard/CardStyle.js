import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative; 
    overflow: hidden; 
    width: 100%;
    padding: 1rem 0 2rem;
    background:#fff ;

`
export const SectionContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`

export const CardInfo = styled.div`
    border-radius: 5px;
    margin: 20px;
    background:#eaeaea;
    height: 360px;
    width: 250px;
    border: 1px solid #6c757d;
     z-index: 3; 
    display: flex;
    flex-direction: column;
`

export const Icon = styled.img`
    width: 248px;
    height: 160px;
    margin: 0 auto;
    flex: 0 0 auto;
    margin-top: 0%;
    margin-bottom: 2rem;
    font-size: 40px;
    background-color: blue;
`

export const InfoH1 = styled.h1`
    text-align: center;
    font-size: 30px;

`

export const InfoP = styled.p`
    text-align: center;
    font-size: 20px;
`

export const NomeIcon = styled.h3`
    text-align: center;
    font-size: 17px;
    color:#000;
`

export const IconPrice = styled.h1`
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: #000;
`

export const LocationIcon = styled.p`
    text-align: center;
    font-size: 20px;
    color:  palevioletred;
`

export const ButtonIcon = styled.button`
  background: #70DBB8;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid #6c757d;
  border-radius: 3px;
  transition: 0.5s;
  :hover,:active,:focus{
        color: white;
        box-shadow: 0 0 0 0.25rem  rgba(112, 219, 184, 0.5);
        background: #4ea488 ; 
        border-color: #6c757d;
        outline: none;
    }
`;