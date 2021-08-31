import styled from 'styled-components'



export const HeroContainer =styled.div`
    background: #0c0c0c;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 450px;
    position: relative;
    z-index: 1;
    :before {
        content:'';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180degm rgba(0,0,0,0.2) 0% transparent 100%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232834;   
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
     flex-direction: column;
    align-items: center;
`
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 17px;
        width:220px;
    }
    
`



export const InputVideo = styled.input`
    box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.3);    
    padding: 5px;
    border: 1px solid #fff;
    border-radius: 10px;
    text-align: center;
    z-index: 10;
    color: #000;

    background-image: url('https://img.freepik.com/vetores-gratis/localizacao_53876-25530.jpg?size=338&ext=jpg');
    background-repeat: no-repeat;
    background-size: 23px 23px;
    background-position: left center;

    &:focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: none;
    }

`
export const InputContainer = styled.div`
    
    position: relative;
    width: 50vw;
    display:flex;
    flex-wrap: wrap;
    gap: 10px;
   justify-content: space-around;
   align-items:center;

   
`


export const InputDiv = styled.div`
   
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items:center;

    

    
`

export const Button = styled.button`
    border-radius: 20px;
    background:  #009E10 ;
    white-space: nowrap;
    padding:  12px 20px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
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