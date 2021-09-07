import axios from '../http-common';

export const PostCadImovel = (dataForm)=>{
    axios.put(`http://localhost:8081/imovel`,  dataForm )
        .then(res => {
          console.log(res);
          alert("Imovel salvo com sucesso")
          window.location.href="/CadQuarto"
        })
        .catch( e => {
            console.log(e);
        })
}