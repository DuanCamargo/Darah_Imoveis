import axios from '../http-common';

export const GetForm = (email, senha)=>{
  var login = {
    method: 'GET',
    url: '/usuario/loginSenha',
    headers: {
       'email':email,
       'senha': senha
    },
  };

   return axios(login)
  
}

export const banco = () => {
  let user = test()
  return user
}