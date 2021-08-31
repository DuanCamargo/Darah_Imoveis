import styled from "styled-components"


export const CompanyContainer = styled.div`
    width: 100%;
    padding: 1%;
    display: flex;
    align-items: center;
    justify-content: space-between;
   
   
`

export const CompanyWrapper = styled.div`
   
    width: 100%;
    display: flex;
    align-items: center;
    
    justify-content: center;

    @media screen and (max-width:900px){
        flex-wrap: wrap;
    gap: 10px;
        display: flex;
        
    }
    

`

export const Column1 = styled.div`
  margin: 20px;
    display: flex;
    align-items: center;
    
    width: 500px;
    height: 500px;
   

  
`

export const Column2 = styled.div`

    margin: 20px;
    width: 500px;
    height: 500px;

    @media screen and (max-width: 900px){
        margin-top: 0;
        width: 100%;
        height: 300px;
    }

    @media screen and (max-width: 500px){
       
        height: 200px;
    }
   
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
`

export const TextWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    
`

export const TopH1 = styled.h1`
    font-size: 36px;
    color: #000;

    @media screen and (max-width: 900px){
       font-size:31px;
    }

    @media screen and (max-width: 500px){
       
        font-size:25px;
    }
`

export const TopP = styled.p`
    font-size: 20px;
    color: #000;

    @media screen and (max-width: 900px){
       font-size:18px;
    }

    @media screen and (max-width: 500px){
       
        font-size:15px;
    }

`

export const Description = styled.p`
    font-size: 16px;
    color: #000;
    text-align: justify;

    @media screen and (max-width: 900px){
       font-size:15px;
    }

    @media screen and (max-width: 500px){
       
        font-size:14px;
    }
`
