import styled from 'styled-components'

// Container geral
export const ContainerGeral = styled.div`
    width: 1450px;
    margin: 0 auto;
   
`
export const ContainerWrapper = styled.div`
    padding: 20px;
    display: flex;
    margin: 0 auto;
    width: 100%;
`
// Coluna com os elementos de foto, descrição e o embed
export const Column1 = styled.div`
    margin: 5px auto;
    width: 982px;
    height: 100%;
  
    
`
// Container da foto
export const FotoImov = styled.div`
    width: 100%;
    border-radius: 10px ;
    margin: 0 auto;
    height: 300px;
    background: url("https://www.mercadoeeventos.com.br/wp-content/uploads/2021/07/630x355-1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  
 
`
// Coluna do Chat
export const Column2 = styled.div`
    margin: 5px auto;
    width: 300px;
    
   
`
// Container dos dados a ser inserido
export const ItensText = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px ;
    margin-top: 20px;
    width: 100%;
    height: 550px;


`
// Div para colcoar os dados do banco
export const DadosBancoPrice = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    border-radius: 10px 10px 0 0 ;
    width: 100%;
    height: 900px;
    background-color: #e6e6e6;
`

// p do preço
export const Price = styled.p`
    font-size: 35px;
`

// div que tem os dados a direita do preço
export const TitleImov = styled.div`
    display: flex;
    padding: 10px;
    width: 700px;
    height: 50px;
 
`
export const InfoImov = styled.p`
    margin: 3px;
    font-size: 17px;
`

// Descrição do imovel
export const Description = styled.div`
    padding-top: 10px;
    width:100%;
    height: 900px;
    
`
// Chat container
export const Chat = styled.div`
    border-radius: 10px ;
    background-color: #f7f794;
    padding: 4px;
    width: 285px;
    height: 510px;
    position: fixed;
    
    
`
// iframe do mapa
export const Embed = styled.div`
    margin: 20px auto;
    width: 100%;
    height: 500px;
   
`

export const LocationImov = styled.div`
    width: 600px;
    height: 200px;
`
export const DivLocation = styled.div`
    display: flex;
 
    width: 100%;
    
`