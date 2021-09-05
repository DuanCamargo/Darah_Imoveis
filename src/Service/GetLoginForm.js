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
  .then(function teste (response){
    console.log(response.data);
  })
  .catch(e => {
    console.log(e)
  })
}

