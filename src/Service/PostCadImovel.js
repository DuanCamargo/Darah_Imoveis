import axios from '../http-common';

export const PostCadImovel = (dataForm)=>{
    axios.post(`http://localhost:8081/anuncio`,  dataForm )
        .then(res => {
          // console.log(res);
          alert("Anuncio salvo com sucesso")
        })
        .catch( e => {
            console.log(e);
        })
}