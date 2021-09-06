import axios from '../http-common';

export const PostFormImov = (dataForm)=>{
    axios.post(`http://localhost:8081/imovel`,  dataForm )
        .then(res => {
          console.log(res);
          // console.log(res.data);
          alert("Imóvel Enviado com sucesso")
        })
        .catch( e => {
            console.log(e);
        })
}