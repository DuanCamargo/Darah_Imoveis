import axios from '../http-common';

export const GetForm = (email, senha)=>{

    axios.get('http://localhost:8081/loginSenha',
   {
      "email": email,
      "senha": senha
    }
  ).then(res=>{
    return res.data()
  }).catch(e=>{
    console.log(e);
  })

  


}