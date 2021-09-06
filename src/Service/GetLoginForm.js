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
    // console.log("GetLoginForm: "+response.data);
    return response.data
  })
  .catch(e => {
    console.log(e)
  })
}

