import axios from '../http-common';

export const PostCadValores = (dataForm)=>{
    axios.post(`http://localhost:8081/contas`,  dataForm )
        .then(res => {
          console.log(res);
          alert("Foto(s) salva(s) com sucesso")
          window.location.href="/CadFoto"
        })
        .catch( e => {
            console.log(e);
        })
}