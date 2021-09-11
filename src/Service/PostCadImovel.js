import axios from '../http-common';

export const PostCadImovel = (dataForm)=>{
    return axios.post(`http://localhost:8081/anuncio`,  dataForm )
        .then(res => {
          return res.data
          alert("Anuncio salvo com sucesso")
        })
        .catch( e => {
            console.log(e);
        })
}