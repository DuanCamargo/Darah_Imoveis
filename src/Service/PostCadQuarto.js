import axios from '../http-common';

export const PostCadQuarto = (dataForm)=>{
    return axios.post(`http://localhost:8081/quarto`,  dataForm )
        .then(res => {
          // console.log(res);
          alert("Quarto salvo com sucesso")
        })
        .catch( e => {
            console.log(e);
        })
}