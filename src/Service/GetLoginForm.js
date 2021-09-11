import axios from "../http-common";

export const GetForm = (email, senha) => {
  var login = {
    method: 'GET',
    url: '/usuario/loginSenha',
    headers: {
       'email':email,
       'senha': senha
    },
  };

  return axios(login)
  .then(function (response){
<<<<<<< HEAD
    console.log("GetLoginForm: "+response.data);
     return response.data
=======
    return response.data
>>>>>>> 6f3a0a6 (e)
  })
  .catch(e => {
    console.log(e)
  })
}

