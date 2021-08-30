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
    padding-top: 10px;
    box-shadow: 0 0 1em ;
    border-radius: 5px;
    margin: 20px;
    background:#fff;
    height: 360px;
    width: 250px;
     z-index: 3; 
    display: flex;
    flex-direction: column;
`

export const Icon = styled.img`
    width: 150px;
    height: 150px;
    margin: 0 auto;
    flex: 0 0 auto;
    margin-top: 0%;
    margin-bottom: 2rem;
    border-radius: 50%;
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
    color: #000;
`

export const ButtonIcon = styled.button`
    border-radius: 20px;
    background:  #009E10 ;
    width:150px;
    padding:  5px 5px;
    color: #fff;
    font-size: 16px;
   margin: 0 auto;
    border:none;
    cursor: pointer;
    
    transition: all 0.2s ease-in-out;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        background:  #01BF71;
        
    }
    &:focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: none;
    }
`