import axios from '../http-common';

export const PostCadFoto = (dataForm)=>{
    axios.post(`http://localhost:8081/foto`,  dataForm )
        .then(res => {
          console.log(res);
          alert("Foto(s) salvas(s) com sucesso")
        //   window.location.href="/CadImovel"
        })
        .catch( e => {
            console.log(e);
        })
}