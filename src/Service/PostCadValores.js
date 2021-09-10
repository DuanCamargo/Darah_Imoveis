import axios from '../http-common';

export const PostCadValores = (dataForm)=>{
    axios.post(`http://localhost:8081/contas`,  dataForm )
        .then(res => {
          console.log(res);
          alert("Contas salvas com sucesso")
        })
        .catch( e => {
            console.log(e);
        })
}