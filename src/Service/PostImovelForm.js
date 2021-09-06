import axios from '../http-common';

export const PostFormImov = (dataForm)=>{
    axios.post(`http://localhost:8081/imovel`,  dataForm )
        .then(res => {
          console.log(res);
          // console.log(res.data);
          alert("Imóvel Enviado com sucesso")
          window.location.href="/CadImovel"
        })
        .catch( e => {
            console.log(e);
        })
}