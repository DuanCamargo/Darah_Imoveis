import axios from '../http-common';

export const PostFormImov = (dataForm)=>{
    axios.post(`http://localhost:8081/imovel`,  dataForm )
        .then(res => {
          console.log(res);
          alert("Endereço salvo com sucesso")
          window.location.href="/CadQuarto"
        })
        .catch( e => {
            console.log(e);
        })
}