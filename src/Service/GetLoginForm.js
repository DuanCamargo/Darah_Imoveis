import axios from '../http-common';

export const GetForm = (email, senha)=>{
    axios.get(`http://localhost:8081/loginSenha`,  Headers(email, senha) )
        .then(res => {
          console.log(res);
          // console.log(res.data);
          alert("Enviado com sucesso")
        })
        .catch( e => {
            console.log(e);
        })
}