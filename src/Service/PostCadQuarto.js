import axios from '../http-common';

export const PostCadQuarto = (dataForm)=>{
    axios.post(`http://localhost:8081/quarto`,  dataForm )
        .then(res => {
          console.log(res);
          alert("Quarto salvo com sucesso")
          window.location.href="/CadValores"
        })
        .catch( e => {
            console.log(e);
        })
}