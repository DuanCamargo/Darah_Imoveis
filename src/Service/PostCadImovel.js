import axios from '../http-common';

export const PostCadImovel = (dataForm)=>{
    axios.post(`http://localhost:8081/imovel`,  dataForm )
        .then(res => {
          console.log(res);
          alert("Imovel salvo com sucesso")
        //   window.location.href="/CadImovel"
        })
        .catch( e => {
            console.log(e);
        })
}